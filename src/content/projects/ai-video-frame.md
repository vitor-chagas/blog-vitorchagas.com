---
title: AI Video Frame
description: Automatically grab the best frames from any video — no manual scrubbing required.
coverImage: /projects/ai-video-frame/cover.png
images:
  - /projects/ai-video-frame/cover.png
  - /videos/ai-video-frame-app-demo.mp4
year: 2026
stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "MediaPipe", "OpenCV", "OpenAI Whisper", "FFmpeg", "PostgreSQL", "Google OIDC", "Stripe", "PostHog", "Docker"]
tags: ["python", "ai", "video", "cli"]
liveUrl: https://aivideoframe.com
githubUrl: https://github.com/vitor-chagas/ai-video-frame
apiUrl: https://rapidapi.com/vitorvieirachagas/api/ai-video-frame-api/playground/apiendpoint_c339886f-6712-435a-a953-a71fe1fce052
status: active
---

## Overview

You recorded a great moment, an interview, a talk, a highlight reel, but it's in landscape... Now you need it vertical for Instagram Stories, square for a post, or cropped for TikTok. The old way means scrubbing through the video, manually adjusting the crop frame by frame, and hoping you didn't cut anyone's head off.

AI Video Frame handles it automatically. Upload your video, pick an aspect ratio, and the AI figures out where the subject is at every moment, keeping them centered and in frame throughout. You get a clean, properly framed video ready to post, without touching a single timeline.

<div class="not-prose video-compare" style="margin: 2.5rem 0; position:relative;">
  <div style="display:flex; gap:0; justify-content:center; align-items:center; flex-wrap:wrap;">
    <div style="text-align:center; flex:1; min-width:200px;">
      <video src="/videos/ai-video-frame-demo1-original.mp4" autoplay muted loop playsinline
        style="width:100%; border-radius:0.75rem; border:1px solid #ebebeb;">
      </video>
      <p style="font-size:0.8rem; color:#9b9b9b; margin-top:0.5rem;">Original (16:9)</p>
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0 0.75rem; align-self:stretch;">
      <div style="flex:1; width:2px; background:linear-gradient(to bottom, transparent, #d1d5db, #d1d5db, transparent); border-radius:1px;"></div>
      <div style="background:#18181b; color:#fff; font-size:0.65rem; font-weight:700; letter-spacing:0.05em; padding:0.3rem 0.5rem; border-radius:9999px; border:2px solid #d1d5db; white-space:nowrap; margin:0.5rem 0;">VS</div>
      <div style="flex:1; width:2px; background:linear-gradient(to bottom, transparent, #d1d5db, #d1d5db, transparent); border-radius:1px;"></div>
    </div>
    <div style="text-align:center; flex:0 1 auto; min-width:140px; max-width:240px;">
      <video src="/videos/ai-video-frame-demo1-reframed.mp4" autoplay muted loop playsinline
        style="width:100%; border-radius:0.75rem; border:1px solid #ebebeb;">
      </video>
      <p style="font-size:0.8rem; color:#9b9b9b; margin-top:0.5rem;">Reframed (9:16)</p>
    </div>
  </div>
  <button class="video-sound-toggle" style="position:absolute; top:0.75rem; right:0.75rem; background:rgba(0,0,0,0.55); border:none; border-radius:50%; width:36px; height:36px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s;" aria-label="Toggle sound">
    <svg class="icon-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
    <svg class="icon-unmuted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
  </button>
</div>

## Who is it for?

- **Content creators** who need to repurpose YouTube videos or recordings for Instagram, TikTok, or Reels without losing the subject
- **Social media managers** turning horizontal footage into vertical content at scale
- **Podcasters and educators** who record in landscape but need clips for vertical-first platforms
- **Anyone** sitting on great video that just doesn't fit where they want to share it
- **Developers** who want to integrate smart video reframing directly into their own tools via the RapidAPI


## Key Features

- **Intelligent subject tracking** — The AI follows whoever is in the frame throughout the whole video, not just a static center crop
- **All the formats you need** — Export as 9:16 (TikTok, Reels, Stories), 1:1 (Instagram feed), 4:5, 2:3, or keep it 16:9
- **Auto subtitles** — Add AI-generated, timed subtitles in 20+ languages with a single toggle, burned into the video or as a separate file
- **Nothing to install** — It runs in your browser. Upload, choose your format, download
- **API access** — Need to automate it? The full reframing pipeline is available as a public API on RapidAPI


## Getting started

Head to the app, upload your video, and pick the aspect ratio you need. The AI takes it from there, tracking your subject, reframing the shot, and handing you back a download-ready file. Your first video is free.

<div class="not-prose video-compare" style="margin: 2.5rem 0; position:relative;">
  <div style="display:flex; gap:0; justify-content:center; align-items:center; flex-wrap:wrap;">
    <div style="text-align:center; flex:1; min-width:200px;">
      <video src="/videos/ai-video-frame-demo2-original.mp4" autoplay muted loop playsinline
        style="width:100%; border-radius:0.75rem; border:1px solid #ebebeb;">
      </video>
      <p style="font-size:0.8rem; color:#9b9b9b; margin-top:0.5rem;">Original (16:9)</p>
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0 0.75rem; align-self:stretch;">
      <div style="flex:1; width:2px; background:linear-gradient(to bottom, transparent, #d1d5db, #d1d5db, transparent); border-radius:1px;"></div>
      <div style="background:#18181b; color:#fff; font-size:0.65rem; font-weight:700; letter-spacing:0.05em; padding:0.3rem 0.5rem; border-radius:9999px; border:2px solid #d1d5db; white-space:nowrap; margin:0.5rem 0;">VS</div>
      <div style="flex:1; width:2px; background:linear-gradient(to bottom, transparent, #d1d5db, #d1d5db, transparent); border-radius:1px;"></div>
    </div>
    <div style="text-align:center; flex:0 1 auto; min-width:140px; max-width:240px;">
      <video src="/videos/ai-video-frame-demo2-reframed.mp4" autoplay muted loop playsinline
        style="width:100%; border-radius:0.75rem; border:1px solid #ebebeb;">
      </video>
      <p style="font-size:0.8rem; color:#9b9b9b; margin-top:0.5rem;">Reframed (9:16)</p>
    </div>
  </div>
  <button class="video-sound-toggle" style="position:absolute; top:0.75rem; right:0.75rem; background:rgba(0,0,0,0.55); border:none; border-radius:50%; width:36px; height:36px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s;" aria-label="Toggle sound">
    <svg class="icon-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
    <svg class="icon-unmuted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
  </button>
</div>
