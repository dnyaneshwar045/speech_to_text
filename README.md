# speech_to_text

A simple web app that converts your speech to text using your browser's built-in speech recognition.

## Features

- Click the mic icon to start/stop recording.
- Your speech is transcribed live into the text area.
- Clean, responsive UI.

## How to Use

1. **Clone or download this repository.**
2. Make sure you have the following files in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `mic-1.png` (mic icon, green background, cropped)
   - `record-button-thumb.png` (mic icon for recording state)
3. **Open `index.html` in Google Chrome or Microsoft Edge.**
4. When prompted, **allow microphone access**.
5. Click the mic icon to start or stop speech recognition.

## Troubleshooting

- If you see `Error occurred in recognition: not-allowed`, make sure:
  - You allowed microphone access in your browser.
  - You are running the site from `localhost` or over `https://`.
  - Your OS privacy settings allow your browser to use the microphone.

## Customization

- To change the mic icon, replace `mic-1.png` and `record-button-thumb.png` with your own images (preferably cropped to remove white padding).
- To change the language, edit the `recognition.lang` property in `script.js`.

## Browser Support

- Works best in **Google Chrome** and **Microsoft Edge**.
- Not supported in Firefox or Safari.

## License

This project is for educational
