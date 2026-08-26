import assert from "node:assert/strict";
import test from "node:test";

test("Project Data Integrity Tests", async () => {
    const { projectsData, getProjects, getProjectBySlug, getAllProjectSlugs } = await import("../src/lib/data.ts");

    // 1. Projects exist for PT and EN
    assert.equal(Array.isArray(projectsData.pt), true, "PT projects should be an array");
    assert.equal(Array.isArray(projectsData.en), true, "EN projects should be an array");
    assert.equal(projectsData.pt.length, projectsData.en.length, "PT and EN must have the same count of projects");

    // 2. Test helper functions
    const ptList = getProjects("pt");
    assert.equal(ptList.length > 0, true, "getProjects('pt') should return non-empty list");

    const slugs = getAllProjectSlugs();
    assert.equal(slugs.includes("game-deals-radar"), true, "Slugs must include game-deals-radar");
    assert.equal(slugs.includes("room-scheduler"), true, "Slugs must include room-scheduler");
    assert.equal(slugs.includes("orderly"), true, "Slugs must include orderly");

    // 3. Test getProjectBySlug
    const project = getProjectBySlug("game-deals-radar", "pt");
    assert.ok(project, "Project should be found by slug");
    assert.equal(project.title, "Game Deals Radar");
    assert.ok(project.tags.length > 0, "Project should have tags");
    assert.ok(project.architecture, "Project should have architecture defined");

    const roomScheduler = getProjectBySlug("room-scheduler", "pt");
    assert.ok(roomScheduler, "Room Scheduler should be found by slug");
    assert.equal(roomScheduler.isPrivate, false, "Room Scheduler is a public repository");
    assert.ok(roomScheduler.coldStartNotice, "Room Scheduler should have coldStartNotice");
    assert.equal(roomScheduler.gallery?.length, 5, "Room Scheduler should have 5 gallery images");
});
