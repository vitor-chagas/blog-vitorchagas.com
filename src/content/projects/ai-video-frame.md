---
title: ai-video-frame
description: Extract frames from videos using AI-driven scene detection.
githubUrl: https://github.com/vitorchagas/ai-video-frame
tags: ["python", "ai", "video", "cli"]
status: active
---

`ai-video-frame` is a tool for extracting meaningful frames from video files using AI-powered scene change detection.

## Overview

Instead of dumping every N-th frame, `ai-video-frame` analyzes the video stream and picks frames at semantically significant moments — scene cuts, motion peaks, and visual changes.

## Features

- Scene-change detection via perceptual hashing
- Configurable sensitivity threshold
- Outputs as JPEG/PNG with timestamps in filenames
- CLI and Python API

## Usage

```bash
ai-video-frame extract input.mp4 --output ./frames --threshold 0.3
```

## Configuration

| Option | Default | Description |
|---|---|---|
| `--threshold` | `0.3` | Scene change sensitivity (0–1) |
| `--format` | `jpeg` | Output format (`jpeg` or `png`) |
| `--max-frames` | unlimited | Cap on extracted frames |

## How it works

1. Decode video with FFmpeg
2. Compute perceptual hash (pHash) for each frame
3. Compare consecutive hashes — flag frames above threshold as scene boundaries
4. Write flagged frames to disk
