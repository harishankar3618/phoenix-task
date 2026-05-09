Add flag image assets

Place the uploaded flag images into the project `public` folder at:

public/assets/flags/

Use these filenames (all lowercase):

- us.png   — United States / USA flag
- au.png   — Australia flag
- nz.png   — New Zealand flag
- ae.png   — United Arab Emirates flag
- in.png   — India flag

Notes:
- The `Flag` atom now attempts to load `/assets/flags/{code}.png` and will fall back to an emoji if the image is missing or fails to load.
- If you prefer SVGs, use matching names (e.g. `us.svg`) and adjust the `Flag` atom to prefer `.svg`.

Using the uploaded images:
- Rename the files you uploaded to the names above and copy them into `public/assets/flags/`.
- After placing images, run the dev server (`npm run dev`) and the `Flag` atom will show the images automatically.

Examples of where to use `Flag`:
- Country service cards (USA / AUSTRALIA / NEW ZEALAND / UAE)
- Office listing cards
- Language selector (if you want icon + label)

If you want, I can also update the service cards and homepage sections to reference these flags and swap the Webflow CDN flags with the local images — confirm and I will proceed.