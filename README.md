# Code-and-Connect App - A Realtime Code Editor & white Board App

![Preview Image](./preview.png)

Code Sync is a collaborative, real-time code editor where users can seamlessly code together. It provides a platform for multiple users to enter a room, share a unique room ID, and collaborate on code simultaneously.

## 🔮 Features

-   💻 Real-time collaboration on code editing across multiple files
-   📁 Open, edit, save, and delete file functionalities
-   💾 Option to download files edited within the collaboration session
-   🚀 Unique room generation with room ID for collaboration
-   🌍 Comprehensive language support for versatile programming
-   🌈 Syntax highlighting for various file types with auto-language detection
-   🚀 Code Execution: Users can execute the code directly within the collaboration environment, providing instant feedback and results.
-   ⏱️ Instant updates and synchronization of code changes across all files
-   📣 Notifications for user join and leave events
-   👥 User presence list of users currently in the collaboration session, including online/offline status indicators
-   💬 Group chatting allows users to communicate in real-time while working on code.
-   🎩 Real-time tooltip displaying users currently editing
-   💡 Auto suggestion based on programming language
-   🔠 Option to change font size and font family
-   🎨 Multiple themes for personalized coding experience
-   🎨 Collaborative Drawing: Enable users to draw and sketch collaboratively in real-time, enhancing the interactive experience of your project.


## 💻 Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket io](https://img.shields.io/badge/Socket.io-ffffff?style=for-the-badge)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<details>
    <summary>
        <h2>📂 Folder Structure</h2>
    </summary>

```
client/
├── public/
│   ├── favicon/
│   │   └── ...
├── src/
│   ├── api/
│   │   └── index.jsx
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── chats/
│   │   │   ├── ChatInput.jsx
│   │   │   └── ChatList.jsx
│   │   ├── common/
│   │   │   ├── Users.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Select.jsx
│   │   ├── connection/
│   │   │   └── ConnectionStatusPage.jsx
│   │   ├── drawing/
│   │   │   └── DrawingEditor.jsx
│   │   ├── editor/
│   │   │   ├── tooltip.js
│   │   │   ├── Editor.jsx
│   │   │   └── EditorComponent.jsx
│   │   ├── files/
│   │   │   ├── FileEditor.jsx
│   │   │   └── FileSystem.jsx
│   │   ├── loading/
│   │   │   └── Loading.jsx
│   │   ├── sidebar/
│   │   │   └── Sidebar.jsx
│   │   ├── tabs/
│   │   │   ├── ChatsTab.jsx
│   │   │   ├── UsersTab.jsx
│   │   │   ├── FileTab.jsx
│   │   │   ├── RunTab.jsx
│   │   │   ├── SettingsTab.jsx
│   │   │   └── TabButton.jsx
│   │   ├── toast/
│   │   │   └── Toast.jsx
│   │   ├── GitHubCorner.jsx
│   │   └── SplitterComponent.jsx
│   ├── context/
│   │   ├── AppContext.jsx
│   │   ├── AppProvider.jsx
│   │   ├── ChatContext.jsx
│   │   ├── FileContext.jsx
│   │   ├── RunContext.jsx
│   │   ├── SettingContext.jsx
│   │   ├── SocketContext.jsx
│   │   └── TabContext.jsx
│   ├── hooks/
│   │   ├── useAppContext.jsx
│   │   ├── useChatRoom.jsx
│   │   ├── useFileSystem.jsx
│   │   ├── useFullScreen.jsx
│   │   ├── useLocalStorage.jsx
│   │   ├── usePageEvents.jsx
│   │   ├── useResponsive.jsx
│   │   ├── useRunCode.jsx
│   │   ├── useSetting.jsx
│   │   ├── useSocket.jsx
│   │   ├── useTab.jsx
│   │   ├── useUserActivity.jsx
│   │   └── useWindowDimensions.jsx
│   ├── pages/
│   │   ├── EditorPage.jsx
│   │   └── HomePage.jsx
│   ├── resources/
│   │   ├── Font.js
│   │   └── Themes.js
│   ├── socket/
│   │   └── socket.js
│   ├── utils/
│   │   ├── actions.js
│   │   ├── editorPlaceholder.js
│   │   ├── formateDate.js
│   │   ├── initialFile.js
│   │   ├── getIconClassName.js
│   │   ├── status.js
│   │   └── tabs.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vercel.json
└── vite.config.js

server/
├── utils/
│   └── actions.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js

CONTRIBUTING.md
LICENSE
preview.png
README.md
```

</details>

## ⚙️ Installation


1. **Set .env file:**
   Inside the client and server directory, create or edit the .env file and add the following line:  
   Frontend:

    ```bash
    VITE_BACKEND_URL=<your_server_url>
    ```

    Backend:

    ```bash
    PORT=3000
    ```

2. **Install dependencies:**
   Navigate to the frontend and backend directories separately and run:
    ```bash
     npm install
    ```
3. **Start the frontend and backend servers:**  
   Frontend:
    ```bash
    cd client
    npm run dev
    ```
    Backend:
    ```bash
    cd server
    npm run dev
    ```
4. **Access the application:**
   Open a browser and enter the following URL:
    ```bash
    http://localhost:5173/
    ```

## 🔮 Features for next release

-   **Admin Permission:** Implement an admin permission system to manage user access levels and control over certain platform features.
-   **Search and Replace:** Implement a search and replace functionality for efficient code navigation.


## 🌟 Appreciation for Resources

Special thanks to EMKC for providing the Piston API, and enabling code execution. For more information, visit the following links:

-   [Piston Repository](https://github.com/engineer-man/piston)
-   [Piston Docs](https://piston.readthedocs.io/en/latest/api-v2/)

Also, huge gratitude to Tldraw contributors for their amazing library. For more information about Tldraw, please visit:

-   [Tldraw Repository](https://github.com/tldraw/tldraw)
-   [Tldraw Documentation](https://tldraw.dev/)
# code-and-connect
