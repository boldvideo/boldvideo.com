---
title: "The Yo! Podcast Just Got a Brain"
slug: yo-podcast-relaunch
author: Rob Hope
date: "2026-04-03"
excerpt: "Three seasons of interviews with designers, developers, and makers I genuinely admire — all slowly sinking into the algorithmic void. So I rebuilt the whole thing."
image: /images/blog/yo-podcast-relaunch.png
---

I've been sitting on three seasons of conversations with designers, developers, and makers I genuinely admire. Pablo Stanley talking about the weird tension between art and product. Rasmus Andersson (the guy who designed Inter, the typeface you're probably reading right now) unpacking why he left Figma to build his own computing environment. Derek Sivers rethinking everything about what a career should look like.

All living on YouTube, where they slowly sink into the algorithmic void.

That bothered me. Not because the episodes weren't getting views (though, yeah, that too). It bothered me because there's real, specific knowledge buried inside these conversations, and there's no good way to get to it. You can't Google *"what did Dann Petty say about staying independent as a designer"* and get a timestamped answer. You'd have to rewatch a 40-minute episode and hope you find the right moment.

Nobody does that.

So I rebuilt the whole thing. The Yo! Podcast now lives at [yo.fm](https://yo.fm), powered by Bold. (Full disclosure: I co-founded Bold with Marcel. This is the product we build.)

## What changed

Every episode is fully indexed. Not just transcribed — understood. Bold extracts what each conversation is actually about: topics covered, questions answered, the moments where a guest says something you'd want to screenshot and send to a friend.

**You can chat with any individual episode.** Click into the Pablo Stanley episode, ask *"what does Pablo think about side projects?"* and get an answer pulled straight from the conversation, with a timestamp so you can watch him say it. Not a summary someone wrote. His actual words, cited.

**You can ask across the entire library.** "Ask Rob" on the homepage searches every episode at once. Type *"how do guests handle burnout?"* and it returns the moments where different guests talked about that specific thing. Rasmus may have mentioned it in passing. Grace Walker may have spent ten minutes on it. You get both, with context, without rewatching anything.

Even with a relatively small catalog, the difference between *"go find it yourself"* and *"ask and get an answer with a timestamp"* is night and day.

## How it's built

The whole site runs on Bold's Next.js starter kit. Sanity handles the CMS. Bold handles everything else — video hosting, transcription, intelligence extraction, search, and the AI chat endpoints.

If you're a developer or creator thinking about doing the same thing with your own content, the starter kit is where I'd point you. Same codebase that powers yo.fm. You bring the videos. Bold does the indexing. You get a site with search and AI chat out of the box.

For non-developers: this is also what Bold does as a managed service for coaching programs and training companies. Same tech, different packaging. The yo.fm setup took me a few days because I wanted to customize the design. A standard Bold portal can be up in an afternoon.

## Go poke around

Head over to [yo.fm](https://yo.fm) and try it.

Click into an episode and chat with it. Try something specific like *"any episodes about building in public?"* or something broad like *"what do guests say about keeping things simple?"* If something feels off, I'm [@robhope](https://twitter.com/robhope) on X.

Here's the strange part. I recorded these interviews. I had the conversations. And I still can't remember which episode covers what. When I type a question into the Ask Rob chat and it pulls up the exact moment from a conversation I had two years ago, it's a weird feeling. *Like the podcast remembers things better than I do.*

That's the point. Three seasons of conversations. Before: invisible. Now: askable.

If you're running a podcast, a course, or any video library and you're thinking *"I wish my stuff worked like this,"* that's literally why Bold exists. [Book a demo with Marcel →](https://savvycal.com/marcel-from-bold/7838d613)

— Rob
