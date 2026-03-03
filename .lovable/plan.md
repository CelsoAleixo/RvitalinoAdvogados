

## Plan: Replace hero video with crop-duster image and enlarge

**What changes:**

1. **Copy the uploaded image** to `src/assets/agro-hero-aviao.png` for use in the hero section.

2. **Update `src/pages/LandingAgro.tsx`** (lines 93-108):
   - Replace the `<video>` element with an `<img>` tag using the uploaded Air Tractor AT-802 photo.
   - Enlarge the container: change `aspect-[9/14] max-h-[520px] max-w-[380px]` to `aspect-[16/10] max-h-[600px] max-w-[640px]` so the image displays much larger and in landscape orientation (matching the photo's aspect ratio).
   - Remove the video-related imports (`heroVideo`) if no longer used elsewhere.

3. **Generate a looping video** using AI image generation of the Air Tractor AT-802 crop-dusting scene as reference, then embed it. However, since the user said "coloque apenas esse avião pulverizando" pointing to the image, and the image is static, the simplest approach is to use the image directly as a large hero visual. If the user still wants a video, we can generate one in a follow-up.

**Result:** The hero right side will show the uploaded crop-duster photo at a larger size, replacing the current video player.

