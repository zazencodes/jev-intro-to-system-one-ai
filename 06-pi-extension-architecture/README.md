# Lesson 06 — Agent Reflex Architecture (Why Coding Agents Need System 1)

Architecture notes for adding Jev to [Pi](https://github.com/earendil-works/pi) (`@earendil-works/pi-coding-agent`). No code in this lesson.

## Pi extension events

A Pi extension is a TypeScript module whose default export receives `pi: ExtensionAPI`. It subscribes to events with `pi.on(...)`:

1. `input`: raw user input, before Pi processes it.
2. `before_agent_start`: the prompt, plus system prompt sections the handler can change.
3. `tool_call`: a tool call (e.g. `bash`) before it runs. Return `{ block: true, reason }` to stop it.
4. `tool_result`: tool output before it returns to the model.

Lesson 07 uses `tool_call` for a Jev safety shield and `before_agent_start` for a Jev persona router. See Pi's [extension docs](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/extensions.md).
