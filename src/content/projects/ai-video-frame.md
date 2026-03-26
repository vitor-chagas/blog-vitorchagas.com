---
title: AI Video Frame
description: Extract frames from videos using AI-driven scene detection.
coverImage: /projects/ai-video-frame/cover.png
images:
  - /projects/ai-video-frame/screenshot-1.png
  - /projects/ai-video-frame/screenshot-2.png
  - /projects/ai-video-frame/screenshot-3.png
year: 2024
stack: ["Python", "FFmpeg", "OpenCV"]
contributions: ["Backend", "CLI", "Algorithm"]
tags: ["python", "ai", "video", "cli"]
githubUrl: https://github.com/vitorchagas/ai-video-frame
status: active
---

## Overview

`ai-video-frame` is a tool for extracting meaningful frames from video files using AI-powered scene change detection.

Instead of dumping every N-th frame, `ai-video-frame` analyzes the video stream and picks frames at semantically significant moments — scene cuts, motion peaks, and visual changes.

## What it does

- Scene-change detection via perceptual hashing
- Configurable sensitivity threshold
- Outputs as JPEG/PNG with timestamps in filenames
- CLI and Python API

### Usage

```bash
ai-video-frame extract input.mp4 --output ./frames --threshold 0.3
```

### Configuration

| Option | Default | Description |
|---|---|---|
| `--threshold` | `0.3` | Scene change sensitivity (0–1) |
| `--format` | `jpeg` | Output format (`jpeg` or `png`) |
| `--max-frames` | unlimited | Cap on extracted frames |

### How it works

1. Decode video with FFmpeg
2. Compute perceptual hash (pHash) for each frame
3. Compare consecutive hashes — flag frames above threshold as scene boundaries
4. Write flagged frames to disk
