import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports a complete portfolio homepage", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, /Prozac Laputa — Original Works/);
  assert.match(html, /把自己的问题/);
  const expectedOrder = ["Vibe Canvas", "FlashThought", "问筊", "口袋观测站", "起身岛", "Free3 Mapper", "Decision UI for Codex", "Codex Usage HUD", "快捷启动"];
  let previousPosition = -1;
  for (const work of expectedOrder) {
    assert.match(html, new RegExp(work));
    const position = html.indexOf(work);
    assert.ok(position > previousPosition, `${work} should follow the higher-priority work`);
    previousPosition = position;
  }
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("keeps all local project images and Pages metadata", async () => {
  for (const path of [
    "public/projects/chaoshan-jiaobei.png",
    "public/projects/vibe-canvas.png",
    "public/projects/free3-mapper.png",
    "public/projects/flash-thought.png",
    "public/projects/codex-usage-hud.jpg",
    "public/projects/codex-decision-ui.png",
    "public/projects/app-hotkey-tool.png",
    "public/projects/standup-island.png",
    "public/projects/pocket-observatory.png",
    "public/favicon.png",
    "public/og.png",
    "public/.nojekyll",
    ".github/workflows/pages.yml",
  ]) {
    await access(new URL(path, projectRoot));
  }
});
