# VAISIRI PU College Admission Enquiry API

## 1. Requirements
- Node.js 18+
- MongoDB local instance or MongoDB Atlas database
- SMTP credentials for the account that sends notification emails

## 2. Install
```bash
npm install
```

Copy `.env.example` to `.env` and fill in the values. Do not commit `.env`.

For Gmail, enable 2-Step Verification and create an App Password. Use the App Password as `SMTP_PASS`; do not use your normal Gmail password.

Set `COLLEGE_EMAIL` to the real admissions/college inbox. `SMTP_USER` is the sending account; `COLLEGE_EMAIL` is the receiving account.

## 3. Start
```bash
npm run dev
```
The API starts at `http://localhost:5000`.

## 4. Endpoints

### Create enquiry
`POST http://localhost:5000/api/enquiries`

JSON body:
```json
{
  "studentName": "Rahul Kumar",
  "fatherName": "Ramesh Kumar",
  "dateOfBirth": "2009-05-15",
  "schoolName": "ABC High School",
  "courseType": "Science",
  "mobileNumber": "9876543210",
  "alternatePhoneNumber": "9123456780",
  "email": "rahul@example.com",
  "address": "Gajuwaka, Visakhapatnam, Andhra Pradesh"
}
```

Required fields: `studentName`, `fatherName`, `dateOfBirth`, `schoolName`, `courseType`, `mobileNumber`, `address`. `courseType` must be `Science` or `Commerce`. Email and alternate phone are optional.

The enquiry is saved first. If SMTP delivery fails, the API still returns success for the database save and includes `emailSent: false` plus a warning. The server logs the mail failure. For production, consider a retry queue/outbox.

### Fetch all enquiries (maximum 10 per page)
`GET http://localhost:5000/api/enquiries?page=1&limit=10`

`limit` is capped at 10 even if a larger value is requested.

### Filter by course
`GET http://localhost:5000/api/enquiries?page=1&limit=10&courseType=Science`

`GET http://localhost:5000/api/enquiries?page=1&limit=10&courseType=Commerce`

Response includes `students`, `pagination`, and `filters`.

## 5. Frontend example
```js
const response = await fetch("http://localhost:5000/api/enquiries", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});
const result = await response.json();
if (!response.ok) throw new Error(result.message || "Submission failed");
```

Fetch page:
```js
const params = new URLSearchParams({
  page: String(page),
  limit: "10",
  ...(courseType ? { courseType } : {})
});
const response = await fetch(`http://localhost:5000/api/enquiries?${params}`);
const result = await response.json();
```

## Important production note
The GET endpoint returns student personal information. Protect it with authentication/authorization before exposing it publicly. Add rate limiting, HTTPS, and a privacy/retention policy before production deployment.
