



Assignment 4
Project Overview:
You are tasked with implementing a responsive website based on the provided requirements. The website should include the following sections: Navbar, Header, Our Services, Event Items, Gallery, Pricing, Review, Recent Events, and Footer. If the Figma file includes extra sections, make sure to include them in your website too. This way, you're building exactly what the design suggests.

Frontend Requirements
User Registration & Authentication
Implement role-based authentication (e.g., user, admin).
Provide smooth user registration and login functionality.
Routing (Other Pages)
Public Routes:
Home Page: Display an overview of the platform.
All Products Page: Showcase all available bicycles with filtering and sorting options.
Product Details Page: Display detailed information about a specific bicycle.
About Us Page: Provide information about the platform/company.
Private Routes:
Checkout Page: Accessible to authenticated users for placing orders.
Dashboard (Role-Based Access):
User Role: View order history and account details.
Admin Role: Manage products, view orders, and oversee platform activities.
UI/UX Design
Ensure an intuitive, responsive, and visually appealing interface.
Prioritize user-friendliness across all device sizes.
Design Guideline: Design_Guideline - Google Docs
Backend Requirements (Module Pattern):
Database: Use MongoDB with a schema including:
Users (defined roles: user, admin)
products (with attributes like name, brand, price, model, stock)
Orders (linked to user, product details, total price, status)
Authentication:
Implement user registration, login, JWT token management, and logout.
Ensure secure password hashing and user session handling.
Product Management:
Implement CRUD operations for bicycles (create, read, update, delete).
Order Management:
Execute CRUD operations for orders (create, read, update, delete), ensuring stock levels before orders are placed.
Payment Integration:
Utilize SurjoPay/AmaarPay/SSLCommerz/Stripe or any other payment gateway for payment processing.
Error Handling:
Establish consistent, user-friendly error messaging for invalid login attempts, out-of-stock bicycles, etc.
Additional Changes:
Ensure backend APIs support pagination for product listings and order retrieval.
Add authentication middleware to protect private routes, including checkout and the dashboard
You can use any existing backend if you have developed it earlier or create a new version modifying from the existing older one.


Home page:
১. হোম পেজ এ লোগো এর ক্ষেত্রে PNG ফাইল ব্যবহার করতে পারেন। ব্যাকগ্রাউন্ড রিমুভ করে দিবেন। 
২. মেনু টেক্স এর সাইজ রেগুলার রাখবেন। 
৩. মেনু এবং লোগোর ২ পাশে ব্যাকগ্রাউন্ড কালার ফুল থাকবে কিন্তু টেক্স এবং লোগো ইমেজ এর ২ পাশে গ্যাপ থাকবে। 
৪. Carousel এর উভয় পাশে গ্যাপ হবে লগো এবং মেন্যু টেক্স বরাবর। 
৫. Carousel এর উচ্চতা এমন হবে যেন নিচের সেকশন সম্পর্কে ধারণা পাওয়া যায়। 
৬. সার্ভিস বা প্রোডাক্ট ওয়েবসাইট গুলোর ক্ষেত্রে প্রতিটি রৌ তে কমপক্ষে ৪ টি কার্ড রাখবেন। কার্ড এর সাইজ বেশি বড় হবে না। 
৭. কার্ড এর ভিতরে উপযুক্ত তথ্য থাকতে হবে। যেমন ইমেজ, টাইটেল, প্রাইস, রিভিউ (থাকতে পারলে ভালো হয় )
৮. প্রোডাক্ট বা সার্ভিস পেজ এর ক্ষেত্রে প্রোডাক্ট বা সার্ভিস কে হাইলাইট করতে হবে। বিভিন্ন ভাবে প্রোডাক্ট গুলো উপস্থাপন করতে হবে।  যেমন ecommerce ওয়েবসাইট এর ক্ষেত্রে Hot Product, Best Product আর All Product দেখতে পারেন। এমন বিভিন্ন সেকশন এ প্রোডাক্ট গুলো ক্যাটাগরি ওইউস আলাদা করতে পারেন। সার্ভিস এর ক্ষেত্রে ও একই। 
৯. ওয়েবসাইট এ ১-২ টি প্রমোশনাল ব্যানার থাকতে পারে। 
১০. ফুটার এর ক্ষেত্রে ৩-৪ টি কলামে ভাগ করতে পারেন।  সেখানে কোম্পানি লোগো + ট্যাগলাইন।  মেনু বা আড্ডিশনাল পেজ।  নিউজলেটার এবং অন্য কলামে সোশ্যাল মিডিয়া লিংক থাকতে পারে।  এছাড়া পেমেন্ট সহ বিভিন্ন তথ্য রাখা যেতে পারে। 
১১. ওয়েবসাইট এর কনটেন্ট গুলো নিজের মত লিখতে পারেন। কপি পেস্ট থেকে বিরত থাকতে পারেন। 
১২. ট্যাগ লাইন লেখার ক্ষেত্রে ডাইনামিক হওয়া উচিত।  যেমন হোম পেজ এর ট্যাগলাইন এ ডোমেইন নামের সাথে হোম পেজ।  লগইন পেজার ক্ষেত্রে লগইন পেজ এমন থাকলে ভালো হয়। 


Product/Service ডিটেলস পেজ:
১. অবশই নাভ্বার থাকবে এই পেজ এ। 
২. নাভ্বার এর লোগো এবং মেনু টেক্স এর গ্যাপ অনুসারে প্রোডাক্ট ডিটেলস পেজ এর ডিসাইন শুরু হবে। 
৩. ২ টি কলামে ভাগ করা যেতে পারে।  ইমেজ এর জায়গায় মাল্টিপল ইমেজ ব্যবহার করতে পারলে ভালো হয়।  অন্য পাশে কিছু তথ্য রাখা জরুরি। যেমন: ecommerce এর ক্ষেত্রে - প্রোডাক্ট এর নাম, কালার, সাইজ (প্রয়োজন অনুসারে অন্য কিছু), স্টক কোয়ান্টিটি, অর্ডার এর ক্ষেত্রে ইন্ক্রিসে ডিক্রিস বাটন। Add to Cart বাটন। সার্ভিস এর ক্ষেত্রে উপযুক্ত তথ্য সহ সার্ভিস বুক করতে পারবে। 
৪. এই সেকশন এর নিচের অংশে রিভিউ থাকতে পারে। 
৫. তার নিচে প্রোডাক্ট এর স্পেসিফিকেশন থাকবে। 
৬. সিমিলার টাইপের প্রোডাক্ট বা সার্ভিস গুলো দেখতে পারে। 


Cart পেজ:
১. এই পেজে তথ্য আপডেট করার সুযোগ পাবে।  User চাইলে এই পেজ থেকে তার সার্ভিস ডেট বা প্রোডাক্ট কোয়ান্টিটি কম বেশি করতে পারবেন।
২. কুপনের ব্যবস্থা থাকলে এই পেজ থেকে মেইনটেইন করতে পারবেন। 

Checkout পেজ:
১. ডেলিভারি এড্রেস সহ পেমেন্ট থাকবে এই পেজ এ। 
২. চেকআউট পেজ থেকে অর্ডার কন্ফার্ম করলেই মূলত অর্ডার প্লেস হবে। 


ওভারঅল:
১. প্রতিটি পেজার ডিসাইন হবে রেস্পন্সিভ (মোবাইল, ট্যাবলেট এবং ডেস্কটপ এর জন্য )
২. সম্পূর্ণ ওয়েবসাইট এ একটি সর্বোচ্ছ ২ টি ফন্ট ব্যবহার করতে পারলে ভালো হয়। 
৩. কালার ব্যবহারের ক্ষেত্রে 
WebAim : https://webaim.org/resources/contrastchecker/
ReallTime Colors : https://www.realtimecolors.com/
এই ২ টি সাইট থেকে চেক করতে পারেন। 
৪. একটি সেকশন থেকে অন্য সেকশন এর গ্যাপ যেন অনেক বেশি না হয়। 
৫. কালার ব্যবহারের ক্ষেত্রে সিমিলার টাইপ এর ওয়েবসাইট থেকে আইডিয়া নিতে পারেন। 
৬. কার্ড এর ভিতরে hover ইফেক্ট ব্যবহার করা যেতে পারে। 
৭. ওয়েবসাইট এর লোডিং টাইম কম হয় সেদিকে খেয়াল রাখা যেতে পারে। 
৮. এর পাশাপাশি ওয়েবসাইট এর জন্য কিছু আড্ডিশনাল পেজ ডিসাইন করতে পারেন।  যেমন About Us, Company Policy, Contact বা অন্য কিছু। 


Dashboard ডিসাইন:
১. ড্যাশবোর্ড যতটা সম্ভব সাদা কালো রাখতে পারলে ভালো হয়। 
২. ড্যাশবোর্ড এ নাভ্বার থাকবে ড্যাশবোর্ড এর জন্য কিন্তু ফুটার থাকবে না। 
৩. রোল ওইউস কমপক্ষে ৫-৬ টি মেনু থাকবে ড্যাশবোর্ড এ। 
৪. Overview/Dashboard নামে একটি মেনু থাকবে সবগুলো রোলের জন্য সেখানে থাকবে স্টাটিস্টিক তথ্য। সেখানে ৩ টি সেকশন থাকবে।  ১ম সেক্শনে ৩-৪ টি কার্ড থাকবে। ২য় সেক্শনে ১-২ টি চার্ট থাকবে। ৩য় সেক্শনে ১-২ টি টেবিল থাকবে।  আরো কিছু রাখতে চাইলে রাখতে পারেন। 
৪. My Profile পেজার ভিতরের ডিসাইন করতে হবে ফুল পেজ নিয়ে। সোশ্যাল মিডিয়া প্রোফাইল পেজ থেকে চাইলে আইডিয়া নিতে পারেন। 
৫. তথ্য অ্যাড করার ক্ষেত্রে ফর্ম গুলো ফুল পেজ এ ডিসাইন করতে পারলে ভালো হয়।  সেক্ষেত্রে চাইলে ১ টি লাইন এ ২-৩ টি করে ফর্ম  রাখতে পারেন।  অল্প তথ্য রাখার জন্য Modal ব্যবহার করতে পারেন। 
৬. My Profile এবং Logout থাকবে মেনুতে। 



























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# PH_University-Client-side
