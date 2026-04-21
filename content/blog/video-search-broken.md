---
title: "Video Search Is Broken. Here's What Nobody Talks About."
slug: video-search-broken
author: Marcel Fahle
date: "2026-04-21"
excerpt: "We got really good at hosting video. Encoding it. Streaming it. But the moment you ask 'what's actually in this video?' the whole thing falls apart."
image: /images/blog/video-search-broken.png
---

Try this. Open any course platform you've used. Search for "how to handle a difficult sales call." Go ahead, I'll wait.

You probably got one of two results. Either nothing came back at all because the instructor never used that exact phrase. Or you got 47 results with the word "sales" highlighted in a wall of auto-generated transcript text, and now you're supposed to figure out which of those gray paragraphs is the one that actually answers your question.

Welcome to video search in 2026. It's terrible.

I've spent close to two decades building video infrastructure, and this problem has been sitting in plain sight the whole time. We got really good at hosting video. Encoding it. Streaming it at four different quality levels to someone's phone on a train. The plumbing works. But the moment you ask "what's actually *in* this video?" the whole thing falls apart.

## Scrubbing is not searching

Here's the first lie we all accepted: the video timeline is a navigation tool.

It's not. For a talking head recording (which is what 90% of coaching and training content looks like), that timeline is a featureless desert. You hover over it and see the same person, at the same desk, in the same shirt, for 47 minutes. There are no visual landmarks. No chapters. No indication of when the conversation shifts from pricing strategy to hiring your first employee. You just scrub and hope.

This is the equivalent of flipping randomly through a 200-page book because there's no table of contents, no index, and every page looks identical. Nobody would accept that from text. We accept it from video every single day.

## Transcripts were never meant to be read

"But we have transcripts now!" Sure. Pull one up.

A raw transcript is a wall of text with no punctuation decisions you'd trust, no paragraph breaks that match the actual structure of the conversation, and speaker labels that say "Speaker 1" because the system couldn't figure out who was talking. It reads like someone transcribed a fever dream. And I say this as someone who's evaluated every major transcription engine on the market.

Even when the transcription is accurate (and it's gotten very good), the output is optimized for machines, not humans. Nobody sits down and reads a 12,000-word transcript to find the two minutes where the instructor explained how to price a consulting package. They give up. They rewatch the whole thing. Or, more likely, they don't watch it at all.

That's the real cost. Not frustration. Abandonment.

## Keyword search fails because teaching isn't writing

A coach explaining value-based pricing might spend fifteen minutes on the topic without ever saying the words "value-based pricing." They'll tell a story about a client who tripled their rates. They'll walk through a conversation they had with a prospect. They'll say things like "stop charging by the hour" and "anchor to the outcome, not the effort."

Keyword search catches none of this. It's pattern matching against the wrong patterns.

You know what it does catch? Every time someone says "um" near the word "price." Every tangent where the instructor mentioned their own pricing in passing. Every Q&A question where a student asked about something unrelated but used the word "value." You get noise dressed up as results.

## Vector search alone isn't the answer either

Here's where the AI crowd jumps in. "Just embed everything into vectors and do semantic search!" I've built this. Let me tell you what happens.

You take 300 hours of video content, chop the transcripts into chunks, generate embeddings, throw them into a vector database, and run similarity searches against the user's question. The results look promising at first. Semantic search understands that "raising your rates" and "pricing strategy" are related concepts even when the words don't match.

But then a student asks: "How should I handle it when a client says I'm too expensive?"

The vector search returns chunks from eight different videos. Some of them are about objection handling. Some are about mindset. One is from a video about firing bad clients. Another is a tangent from an interview where the guest was talking about their experience in an unrelated industry. The cosine similarity scores are all within a few points of each other. The system can't tell the difference between a definitive teaching moment and a throwaway comment.

This is the core problem. Treating every chunk of transcript as equally authoritative produces answers that sound plausible but cite the wrong things. I've seen this in production from multiple "AI coaching" platforms. The answers reference videos the student has never watched, pull from contexts that don't apply, and mix advice from different stages of a curriculum as if it's all interchangeable.

It's not a search problem. It's a comprehension problem.

## What "understanding" a video actually requires

A video isn't a bag of words. It has structure. It has intent. A 45-minute coaching session might cover onboarding in the first ten minutes, transition to retention strategy, and close with a live Q&A where half the answers contradict the structured teaching because the coach was riffing.

To search video properly, you need a system that knows the difference between those segments. That understands "this section is the core teaching on retention" versus "this is an off-the-cuff answer to a student question that happened to mention retention." That can distinguish between the coach's definitive framework and a guest's anecdote from a different industry.

This is what we build at Bold. We extract structured understanding of what each video actually teaches, what questions it answers, who it's for, and what to watch for. When a student asks a question, we first identify which videos are actually relevant based on this structured understanding, then search within that bounded set for the specific moments that answer the question.

Two tiers. Find the right videos first. Then find the right moments inside them.

It sounds obvious when you say it out loud. But almost nobody does it this way because it's harder than just throwing everything into one big index and hoping the math sorts it out.

## The real cost of broken search

Here's what keeps me up at night about this problem, and why we started Bold in the first place.

There are coaching programs sitting on 200, 300, 500 hours of recorded expertise. The founder spent years creating this content. The production budget was six figures. And their students can't find what they need. So they ask the same questions in Slack. The coaches burn out answering the same ten things every week. Students get frustrated, feel stuck, and churn. Not because the content is bad. Because the content is invisible.

A program with $5 million in annual revenue and 70% retention has a $1.5 million churn problem. If even half of that churn comes from students who couldn't find the help they needed at the moment they needed it (and our customers tell us it's more than half), that's a search problem hiding inside a retention problem.

You can't fix it with a better search bar. You fix it by actually understanding what's in the videos.

## Where this goes

I'm not going to pretend we've solved everything. We haven't. Video understanding is early, and there are hard problems left around speaker identification, cross-referencing between related content, and adapting answers to the student's specific context and progress.

But the baseline of "search the transcript, return some chunks, hope for the best" is a dead end. If you're running a program with a serious content library and your students still can't find what they need, the search isn't broken because of bad keywords.

It's broken because nobody taught the system what the videos are actually about.
