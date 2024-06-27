# Recipe Finder App

This web application helps users find recipes based on the ingredients they have available. Users can select ingredients from a list and get matching recipes along with the procedure to make them.

## Features

- Display a list of ingredients.
- Allow users to select ingredients they have.
- Filter and display recipes that can be made with the selected ingredients.
- Show detailed recipe instructions and images.
- Option to reset and start the process again.

## How to Use

1. **Clone the Repository:**
   - Clone the repository to your local machine using the following command:
     ```
     git clone https://github.com/your-username/recipe-finder-app.git
     ```

2. **Open the Application:**
   - Navigate to the directory where you cloned the repository.
   - Open the `index.html` file in your web browser to run the application.

3. **Display Ingredients:**
   - Click the "Show Items" button to display the list of available ingredients.

4. **Select Ingredients:**
   - A list of ingredients with checkboxes will appear.
   - Check the boxes next to the ingredients you have available.

5. **Submit the Form:**
   - After selecting the ingredients, click the "Submit" button.
   - The application will filter and display recipes that can be made with the selected ingredients.

6. **View Recipes:**
   - If there are matching recipes, they will be displayed with the recipe name, ingredients, an image, and the cooking procedure.
   - If no matching recipes are found, a message will indicate that no recipes match the selected ingredients.

7. **Restart the Application:**
   - Click the "Re-Use" button to reset the application and start the process again.

## Example Recipes

The application includes a variety of recipes such as:

- Chicken Biryani
- Paneer Butter Masala
- Aloo Gobi
- Dal Tadka
- Palak Paneer
- Chole Bhature
- Samosa
- Butter Chicken
- Gulab Jamun
- Pasta Carbonara
- Tacos
- Sushi
- Margherita Pizza
- French Onion Soup
- Pad Thai

## Development Setup

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser to run the application.
3. Modify the `recipes` array in the JavaScript code to add or remove recipes as needed.

## Local Storage

- The application saves the recipes array to local storage to maintain the data across sessions.
- The code checks if the recipes data is already present in local storage. If not, it saves the initial recipes array to local storage.

