# Mazaady

This project is part of the Mazaady Portal frontend development task. It focuses on demonstrating coding techniques, quality, and testing methods using React and Next.js.

## Overview

The Mazaady Portal project is designed to implement a dynamic form with searchable dropdown menus, handling nested category selections, and displaying user selections in a structured format. The project also includes a static page design based on provided design specifications.

## Features

- **Dynamic Form Components:**
  - Searchable dropdown menu for main categories.
  - Subcategory dropdown that dynamically updates based on the main category selection.
  - Generation of a list of dropdown menus for category properties with an additional "other" option.
  - Display of
Certainly! Here's a README.md document template for the "Mazaady Portal" project, a frontend task involving React and Next.js. You can customize this template to fit the specific details and requirements of your project.

markdown
Copy code
# Mazaady Portal - Frontend Task

This project is part of the Mazaady Portal frontend development task. It focuses on demonstrating coding techniques, quality, and testing methods using React and Next.js.

## Overview

The Mazaady Portal project is designed to implement a dynamic form with searchable dropdown menus, handling nested category selections, and displaying user selections in a structured format. The project also includes a static page design based on provided design specifications.

## Features

- **Dynamic Form Components:**
  - Searchable dropdown menu for main categories.
  - Subcategory dropdown that dynamically updates based on the main category selection.
  - Generation of a list of dropdown menus for category properties with an additional "other" option.
  - Display of
a text input field when the "other" option is selected.

Handling nested properties and their relationships (e.g., brand => model => type).

Data Display:

## Submission of user selections to display all chosen values in a key-value table format.
# Integration with External APIs:

- Fetching main categories, subcategories, and properties from specified APIs.
APIs Used
- Main Categories: https://staging.mazaady.com/api/v1/get_all_cats
- Properties (by Sub-category ID): https://staging.mazaady.com/api/v1/properties?cat=13
- Child Properties (by Option ID): https://staging.mazaady.com/api/v1/get-options-child/53
Note: A private key is required for API access.

Static Page Design
The static page design is based on a Figma design file:
View Design

Getting Started
Installation
Clone the repository:
sh
Copy code
git clone https://github.com/your_username/mazaady-portal.git
Install NPM packages:
sh
Copy code
npm install
Running the Application
To start the application, run:

sh
Copy code
npm run dev
Testing
This project includes unit tests to ensure component functionality and integrity. To run the tests:

sh
Copy code
npm test
Built With
Next.js
React
Tailwind CSS
Additional third-party libraries as required
Contributing
Contributions to this project are welcome. Please read the contributing guidelines before making a contribution.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Mazaady for the project specifications and
API resources.

The design team for providing the Figma design files.
The React and Next.js communities for their invaluable resources and support.
Contact
For any inquiries or issues related to the project, please contact the project maintainers or open an issue in the GitHub repository.
