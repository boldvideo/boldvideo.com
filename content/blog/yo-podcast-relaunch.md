---
title: "The Yo! Podcast Just Got a Brain"
slug: yo-podcast-relaunch
author: Rob Hope
date: "2026-04-03"
excerpt: "Twenty-seven episodes. Hundreds of hours of raw conversation. All living on YouTube, slowly sinking into the algorithmic void. So I rebuilt the whole thing."
image: /images/blog/yo-podcast-relaunch.png
---

I've been sitting on three seasons of conversations with designers, developers, and makers I genuinely admire. Pablo Stanley talking about the weird tension between art and product. Rasmus Andersson (the guy who designed Inter, the typeface you're probably reading right now) unpacking why he left Figma to build his own computing environment. Derek Sivers rethinking everything about what a career should look like.

Twenty-seven episodes. Hundreds of hours of raw conversation. All living on YouTube, where they slowly sink into the algorithmic void.

That bothered me. Not because the episodes weren't getting views (though, yeah, that too). It bothered me because there's real, specific knowledge buried inside these conversations, and there's no good way to get to it. You can't Google "what did Dann Petty say about staying independent as a designer" and get a timestamped answer. You'd have to rewatch a 40-minute episode and hope you find the right moment. Nobody does that.

So I rebuilt the whole thing. The Yo! Podcast now lives at [yo.fm](https://yo.fm), powered by Bold.

## What changed

Every episode is fully indexed. Not just transcribed (though that happened too), but understood. Bold extracts what each conversation is actually about: the topics covered, the questions answered, the moments where a guest says something you'd want to screenshot and send to a friend.

That means two things are now possible that weren't before.

**You can chat with any individual episode.** Click into the Pablo Stanley episode, and there's a chat right alongside the video. Ask "what does Pablo think about side projects?" and you get an answer pulled directly from the conversation, with the timestamp so you can watch him say it. It's not a summary someone wrote. It's his actual words, cited and verifiable.

**You can ask questions across the entire library.** There's an "Ask Rob" feature on the homepage. Type in "how do guests handle burnout?" and it searches across all 27 episodes to find the moments where different guests talked about that specific thing. Rasmus might have mentioned it in passing. Grace Walker might have spent ten minutes on it. You get both, with context, without rewatching a single minute of footage you've already seen.

I should be honest: there are only about 27 episodes in there right now. It's not a thousand-video library. But even with a relatively small catalog, the difference between "go find it yourself" and "ask and get an answer with a timestamp" is night and day.

## Why I'm sharing this on the Bold blog

Full disclosure: I co-founded Bold with Marcel. So yes, this is the product we build. And yo.fm is a live, public demo of what it does.

But I'm writing about it here because the experience of being a *customer* of your own product is different from building it. I recorded these interviews. I had the conversations. And I still can't remember which episode covers what. When I type a question into the Ask Rob chat and it pulls up the exact moment from a conversation I had two years ago, it's a strange feeling. Like the podcast remembers things better than I do.

That's the point, though. Podcast hosts, course creators, coaches: we're all sitting on libraries of content that we ourselves can't search. The knowledge is there. The discoverability isn't.

## How it's built

The whole site runs on Bold's Next.js starter kit. Sanity handles the CMS layer. Bold handles everything else: video hosting, transcription, the intelligence extraction, search, and the AI chat endpoints.

If you're a developer or a creator thinking about doing something similar with your own content, the starter kit is where I'd point you. It's the same codebase that powers yo.fm. You bring your videos. Bold does the indexing. You get a site with search and AI chat out of the box.

For the non-developers: this is also what Bold does as a managed service for coaching programs and training companies. Same technology, different packaging. The yo.fm setup took me a few days because I wanted to customize the design. A standard Bold portal can be up in an afternoon.

## Go poke around

Head over to [yo.fm](https://yo.fm) and try it.

Ask a question in the search bar. Click into an episode and chat with it. Try something specific like "any episodes about building in public?" or something broad like "what do guests say about keeping things simple?"

If something feels off or you have feedback, I'm [@robhope](https://twitter.com/robhope) on X. The whole thing is new and I'm genuinely curious what people make of it.

And if you're running a podcast, a course, or any kind of video library and you're thinking "I wish my stuff worked like this," that's literally why Bold exists. [Book a demo with Marcel](https://savvycal.com/marcel-from-bold/7838d613) and he'll show you how it works under the hood.
