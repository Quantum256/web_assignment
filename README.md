# CV Web Page – Nimusiimah Matthew

A personal CV website built by hand with **HTML, CSS and JavaScript only**. It uses no templates, frameworks or libraries.

## 1. Folder structure

```
web_assignment/
├── index.html          ← Sheet 1: page structure and content (HTML)
├── css/
│   └── style.css       ← Sheet 2: design and responsive layout (CSS)
├── js/
│   └── script.js       ← Sheet 3: menu behaviour + form validation (JavaScript)
├── images/             ← put your 3 photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg
└── media/              ← put your song and video here
    ├── favourite-song.mp3
    └── video.mp4
```

## 2. What each sheet does

### Sheet 1: `index.html` (structure)
- The **navigation menu** sits at the top in a fixed header. It links to every section.
- There are **five sections, in the required order**, each with its own `id`:
  1. `#about`: About Me (personal details, languages, interests, skills, organisations)
  2. `#education`: Education and Training
  3. `#employment`: Employment (plus the names of referees)
  4. `#gallery`: 3 photos, 1 favourite song (`<audio>`), 1 video (`<video>`)
  5. `#contact`: Contact Me form with **Name, Phone Number, Comment, Submit, Reset**
- Every section ends with `<a href="#top" class="go-top">Go to Top</a>`. The `id="top"` is on the header, so the link jumps back to the top of the page.
- The CSS file is linked in `<head>`:
  `<link rel="stylesheet" href="css/style.css">`
- The JS file is linked just before `</body>`:
  `<script src="js/script.js"></script>`

### Sheet 2: `css/style.css` (appearance)
- Colour variables sit in `:root`, so you can change the whole colour scheme in one place.
- Styles cover the header and menu, hero banner, cards, education timeline, job boxes, gallery grid, form, and footer.
- **Responsive design** comes from media queries at the bottom of the file:
  - `max-width: 900px` (tablets): grids drop to 2 columns and the menu turns into a hamburger button.
  - `max-width: 600px` (phones): everything stacks into a single column.

### Sheet 3: `js/script.js` (behaviour)
- Opens and closes the hamburger menu on small screens.
- Highlights the menu item for the section currently on screen.
- **Validates every contact form field** before submitting:

| Field | Rules |
|---|---|
| Name | Required, letters only (spaces, `-` and `'` allowed), 3–50 characters, first and last name |
| Phone Number | Required, digits only, Ugandan format `07XXXXXXXX` or `+2567XXXXXXXX` |
| Comment | Required, 10–500 characters |

  Errors appear in red under each field. The field border turns red when it has an error and green when it is correct. **Submit** shows a thank-you message only when all fields are valid. **Reset** clears the fields and all messages.

## 3. How to set it up (step by step)

1. **Create the folders.** Make a main folder, for example `web_assignment`. Inside it, create `css`, `js`, `images` and `media`.
2. **Create the three sheets.** In a text editor such as VS Code or Notepad++:
   - save the HTML code as `index.html` in the main folder
   - save the CSS code as `style.css` inside `css/`
   - save the JavaScript code as `script.js` inside `js/`
3. **Add your gallery files.** Use exactly these names, or change the matching `src` in `index.html`:
   - three photos: `images/photo1.jpg`, `images/photo2.jpg`, `images/photo3.jpg`
   - your favourite song: `media/favourite-song.mp3`
   - your video: `media/video.mp4`
   - To show the song title, change `<h3>My Favourite Song</h3>` in the Gallery section. For example: `<h3>My Favourite Song – "Title" by Artist</h3>`.
4. **Open the page.** Double-click `index.html`, or right-click it and choose *Open with → Chrome/Edge/Firefox*. In VS Code, the *Live Server* extension reloads the page automatically when you save.
5. **Test it:**
   - Click each menu item. The page should scroll to that section.
   - Click **Go to Top** at the end of each section.
   - Submit the form empty to see the error messages. Then enter valid details and submit again.
   - Resize the browser window, or press `F12` and use the device toolbar, to check the tablet and phone layouts.

## 4. Testing each sheet on its own

Each sheet has one job, so you can check them one at a time:

- **HTML only:** remove or comment out the `<link>` and `<script>` lines. The page still shows all the content in plain form, which proves the structure is complete.
- **HTML + CSS:** add the `<link>` line back. The design and responsive layout appear, but the form is not validated and the mobile menu will not open.
- **HTML + CSS + JS:** add the `<script>` line back. Validation, the mobile menu and menu highlighting all work.

## 5. Publishing the page (for submission)

**GitHub Pages:** push this folder to a GitHub repository. Then go to **Settings → Pages → Deploy from a branch**, pick the branch and the `/ (root)` folder, and save. GitHub gives you a link like `https://<username>.github.io/web_assignment/` that you can submit.

## 6. Note on content

All text comes from the CV. Some items were left out on purpose because the page is public:
- the National ID number
- the referees' phone numbers and email addresses (the page says they are "available on request")
