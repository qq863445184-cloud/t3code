import * as NodeCrypto from "@effect/platform-node/NodeCrypto";
import * as NodeServices from "@effect/platform-node/NodeServices";
import * as NetService from "@t3tools/shared/Net";
import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { CliOutput, Command } from "effect/cli";

import { makeCli } from "../binCli.ts";

const helpFlags = (args: ReadonlyArray<string>) => {
  const presented: Array<CliOutput.Presenter.Event> = [];
  const run = Command.runWith(makeCli(), { version: "0.0.0" })(args).pipe(
    Effect.provide(
      Layer.mergeAll(
        NodeServices.layer,
        NodeCrypto.layer,
        NetService.layer,
        CliOutput.layerPresenter({
          present: (event) =>
            Effect.sync(() => {
              presented.push(event);
            }),
        }),
      ),
    ),
    Effect.exit,
  );
  return Effect.as(run, presented);
};

const presentedFlags = (events: ReadonlyArray<CliOutput.Presenter.Event>) => {
  const [event] = events;
  assert.equal(event?._tag, "Help");
  return event?._tag === "Help" ? event.helpDoc.flags.map((flag) => flag.name) : [];
};

it.effect("serve does not advertise the auto-bootstrap flag it always overrides", () =>
  Effect.gen(function* () {
    const events = yield* helpFlags(["serve", "--help"]);
    assert.isFalse(presentedFlags(events).includes("auto-bootstrap-project-from-cwd"));
  }),
);

it.effect("keeps the auto-bootstrap flag on commands that honor it", () =>
  Effect.gen(function* () {
    const events = yield* helpFlags(["--help"]);
    assert.isTrue(presentedFlags(events).includes("auto-bootstrap-project-from-cwd"));
  }),
);
