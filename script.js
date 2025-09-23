/* Reset default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', Arial, Helvetica, sans-serif; /* Modern font with fallback */
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
    min-height: 100vh;
}

/* Main content wrapper for two-column layout */
main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px; /* Constrain width for larger screens */
    margin: 0 auto;
    padding: 2rem 1rem;
    gap: 2rem; /* Space between columns */
}

/* Hero section */
header.hero {
    background-color: #1e40af; /* Darker blue for richer look */
    color: #ffffff;
    text-align: center;
    padding: 4rem 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

header.hero h1 {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 700;
}

header.hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 1.5rem;
}

/* CTA button styles */
a.cta-button,
button.cta-button {
    display: inline-block;
    background-color: #22c55e; /* Brighter green for energy */
    color: #ffffff;
    padding: 0.8rem 2rem;
    text-decoration: none;
    border-radius: 8px; /* Softer corners */
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

a.cta-button:hover,
button.cta-button:hover {
    background-color: #16a34a;
    transform: translateY(-2px); /* Subtle lift effect */
}

/* How It Works section (left column) */
section.how-it-works {
    flex: 1 1 40%; /* Take ~40% of width */
    min-width: 300px; /* Prevent squishing */
    padding: 2rem;
}

/* Stack steps vertically */
.steps {
    display: flex;
    flex-direction: column; /* Vertical stacking */
    gap: 1.5rem;
}

.step {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.step:hover {
    transform: translateY(-5px); /* Hover lift effect */
}

.step h3 {
    font-size: 1.4rem;
    color: #1e40af;
    margin-bottom: 0.5rem;
}

/* Form section (right column) */
section.form-section {
    flex: 1 1 40%; /* Take ~40% of width */
    min-width: 300px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

label {
    font-weight: 600;
    color: #333;
}

input {
    padding: 0.8rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
}

input:focus {
    outline: none;
    border-color: #1e40af;
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

button[type="submit"] {
    background-color: #1e40af;
    color: #ffffff;
    border: none;
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
    background-color: #1e3a8a;
    transform: translateY(-2px);
}

p.privacy-note {
    font-size: 0.9rem;
    color: #6b7280;
    text-align: center;
    margin-top: 1rem;
}

footer {
    text-align: center;
    padding: 2rem;
    background-color: #f1f1f1;
    margin-top: 2rem;
    font-size: 0.9rem;
}

/* Responsive design */
@media (max-width: 768px) {
    main {
        flex-direction: column; /* Stack sections vertically */
    }

    section.how-it-works,
    section.form-section {
        flex: 1 1 100%;
    }

    header.hero h1 {
        font-size: 2rem;
    }
}