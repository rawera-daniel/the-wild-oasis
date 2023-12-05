<h1 align="center">The Wild Oasis</h1>

![A screenshot of the homepage of The wild oasis](/public/Screenshot%202023-12-26%20101030.png)

## Description:

The Wild Oasis is a dashboard that displays statistics on total sales revenue, guest arrivals/departures, and stay summaries. Detailed cabin information, including capacity, prices, discounted prices, and sorting functionality by price or name, comprises all booking details such as guest address, chosen cabin, booking status (unconfirmed, checked-in, checked-out), total price, and sorting functionality by date or status. user account management features, including registration, login, logout, and profile customization. It has separate preferences and a dark colour theme option. This user-friendly dashboard saves you tonnes of time by providing all the features and information you need in one easy-to-access place.

Visit the website at this [link](https://the-wild-oasis-rawera.vercel.app/) .

## Tech Stack:

- JavaScript – Language
- [React](https://react.dev/learn) – Framework
- [Styled components](https://tailwindcss.com/) – Styling component
- [Context API](https://react.dev/reference/react/createContext) – UI (local) state management
- [TanStack Query (React Query)](https://reactrouter.com/en/main) – Remote state management
- [React hook form](https://react-hook-form.com/) – Form management
- [Supabase](https://supabase.com/) – Databases management, and back-end implementation
- [React icons](https://react-icons.github.io/react-icons/) – Visual representation
- [React hot toast](https://react-hot-toast.com/) – Rendering notification
- [Recharts](https://recharts.org/en-US/) – Build charts
- [Date-fns](https://date-fns.org/) – Managing times and dates.
- [Vercel](https://vercel.com/) – Hosting

## How to run the project:

1. Clone the repository:

```bash
git clone https://github.com/rawera-daniel/the-wild-oasis.git
```

2. Open the repository and install dependencies

```bash
npm i
```

3. Run the dev server

```bash
npm run dev
```

4. To open the app in your browser

control + click the link provided by the terminal.

## How to Use the website:

- Login to the account. Use this email address, tohep29726@beeplush.com, with the password, 12345678.

- will take you to the `home webpage`. If you get the notice "No activity today..." after logging in, click the "upload booking only" button on the left-down side.

* On your left, you've got all the main navigation: `booking`, `cabins`, `users`, and `settings`.

* Nothing showing in `bookings` or `cabins`? Click the 'Upload All' button at the bottom left to fill them up.

* In the top right corner, you'll see three icons: To edit profile, change theme, and sign out.

## How to Use the Project:

- Create a Supabse account. Check out the website [here](https://supabase.com/).

- Click the 'New Project' button to get started. Then, find the 'Table Editor' button on the left side and click it to make a table.

- The table contains four files: cabins, guests, bookings, and settings. For each table, turn on "enable row-level security," and it already has two columns called 'id' and 'created_at'.

* **_The words inside the brackets tell you what type they are._**

* Cabin table columns should contain name (text), maxCapacity (int2), regularPrice(int2), discount (int2), description (text), and image (text).

* Guest table columns should contain fullName (text), email (text), nationalID (text), nationality (text), and countryFlag (text).

* Booking table columns should contain startDate (timestamp), endDate (timestamp), numNights (int2), numGuests (int2), cabinPrice (float4), extrasPrice (float4), totalPrice (float4), status (text), hasBreakfast (bool), isPaid (bool), observations (text), cabinId, and guestId.

* **_The cabinId and guestId columns in the booking table get their information from the cabin and guest tables. "To do that, click on the 'Edit Foreign Key Relation' button._**

- Setting table columns should contain minBookingLength (int2), maxBookingLength (int2), maxGuestsPerBooking (int2), and breakfastPrice (float4). This table should only have one row.

* Upload your image file to the storage section on the left sidebar, so the image columns can retrieve files from there."

* To set up authentication, go to the authentication section on the left sidebar.

* See the documentation for details and instructions. [Link](https://supabase.com/docs/reference/javascript/installing) .

## Credits:

This project was primarily created by Jonas Schmedtmann as part of his React course on Udemy, where he's an instructor. Access his website [here](https://codingheroes.io/) and his X (Twitter) [account](https://twitter.com/jonasschmedtman).
