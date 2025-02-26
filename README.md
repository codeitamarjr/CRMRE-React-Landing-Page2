# Real Enquiries Landing Page

Welcome to the **Real Enquiries** landing page repository! This is a modern, responsive, and accessible landing page built with **Next.js, React, Tailwind CSS, and Headless UI**. It features an interactive UI, automatic image transitions, dark mode support, and a privacy policy notification.

---

## 🚀 Features

- **Responsive UI** – Fully mobile-friendly and optimized for different screen sizes.
- **Dark Mode Support** – Automatically switches images based on the user's system preference.
- **Image Slider** – Screenshots rotate every few seconds for a dynamic showcase.
- **Privacy Notification** – Users are informed about tracking policies and can dismiss the notification.
- **Tailwind CSS** – Provides a clean and modern design with utility-first styling.
- **Headless UI Dialog** – Accessible mobile menu for seamless navigation.

---

## 🛠️ Installation & Setup

### 1️⃣ **Clone the repository**

```sh
git clone https://github.com/codeitamarjr/CRMRE-Landing-Page2.git
cd real-enquiries-landing
```

### 2️⃣ **Install dependencies**

Make sure you have **Node.js** and **npm** installed. Then, run:

```sh
npm install
```

### 3️⃣ **Run the development server**

```sh
npm run dev
```

This will start a local development server, usually at **<http://localhost:3000>**.

### 4️⃣ **Build for production**

To create an optimized production build, run:

```sh
npm run build
npm run start
```

---

## 📂 Project Structure

```plaintext
real-enquiries-landing/
├── public/                   # Static assets (images, icons, logos)
├── src/
│   ├── components/           # Reusable components
│   ├── pages/
│   │   ├── index.tsx         # Main landing page
│   ├── styles/               # Tailwind CSS configuration
├── .gitignore                # Ignored files for Git
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation (this file)
```

---

## 🌙 Dark Mode Support

This project automatically detects the user's system theme and adjusts images accordingly:

- **Light Mode:** Uses standard UI images.
- **Dark Mode:** Uses alternate dark-themed UI images.

The detection logic is handled via:

```tsx
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeQuery.addEventListener("change", (event) => {
  setIsDarkMode(event.matches);
});
```

---

## 📸 Image Slideshow

The landing page features a rotating image showcase that changes every **5 seconds** using React state:

```tsx
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentImageIndex((index) => (index + 1) % images.length);
  }, 5000);

  return () => clearInterval(intervalId);
}, []);
```

---

## 📢 Privacy Policy Notification

A dismissible notification informs users about tracking policies using **localStorage** to remember their preference:

```tsx
useEffect(() => {
  const notificationDismissed = localStorage.getItem('notificationDismissed');
  if (notificationDismissed === 'true') {
    setShowNotification(false);
  }
}, []);
```

Users can dismiss it using:

```tsx
const handleDismissNotification = () => {
  setShowNotification(false);
  localStorage.setItem('notificationDismissed', 'true');
};
```

---

## 🔗 Contributing

If you’d like to contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature X'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🏆 Credits

Developed by **Itamar Da Silva Junior** – [Real Enquiries](https://realenquiries.com).
