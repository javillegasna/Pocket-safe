# Welcome to your Personal Finance Tracker Application app 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
  
  ## Overview
  This application is designed to help users manage their personal finances efficiently. With features for tracking accounts, categorizing transactions, and visualizing data, users can gain insights into their spending habits and maintain financial discipline.
  
  ---
  ## DB Schema
  [DB Schema](./docs/db.md)
  ## Core Features
  
  ### 1. User Management
  - **Table Reference:** `users`
  - **Purpose:**
    - Manage user profiles, including personal details like name and email.
    - Provide authentication through securely hashed passwords.
    - Allow users to upload profile pictures for personalization.
  - **Use Case:** Each user can create an account to securely access their financial data.
  
  ### 2. Account Management
  - **Table Reference:** `accounts`
  - **Purpose:**
    - Store details of financial accounts such as checking, savings, or credit card accounts.
    - Link accounts to users and categorize them for better organization.
    - Maintain current balances for each account.
    - Use icons to visually represent accounts in the app.
  - **Use Case:** Users can add multiple accounts and track balances for each.
  
  ### 3. Transactions
  - **Table Reference:** `transactions`
  - **Purpose:**
    - Record all financial transactions, including expenses, income, and transfers.
    - Link transactions to accounts and categorize them for detailed reporting.
    - Support transfers between accounts within the app.
    - Store transaction details like date, amount, and description.
  - **Use Case:** Users can log every financial movement, enabling them to review and analyze spending patterns.
  
  ### 4. Account Categories
  - **Table Reference:** `account_categories`
  - **Purpose:**
    - Provide a way to group accounts into categories (e.g., assets, liabilities).
    - Allow customizations with icons to represent categories visually.
  - **Use Case:** Users can organize accounts logically for easier navigation and reporting.
  
  ### 5. Transaction Categories
  - **Table Reference:** `transaction_categories`
  - **Purpose:**
    - Classify transactions (e.g., groceries, rent, salary).
    - Assign icons to each category for a more intuitive UI.
  - **Use Case:** Users can categorize expenses and income for detailed analysis and budgeting.
  
  ### 6. Icons
  - **Table Reference:** `icons`
  - **Purpose:**
    - Provide visual representations for accounts and categories.
    - Store reusable icons to maintain a consistent design.
  - **Use Case:** Enhance the user experience by associating meaningful icons with financial entities.
  
  ---
  
  ## Application Flow
  1. **User Registration and Login:**
     - Users create an account and log in securely to access their personal financial data.
  
  2. **Adding Accounts:**
     - Users add financial accounts with details such as account name, type, and initial balance.
  
  3. **Logging Transactions:**
     - Users record transactions, linking them to specific accounts and categories.
  
  4. **Categorization and Visualization:**
     - Transactions and accounts are categorized for reporting.
     - Icons are used to improve the app's visual appeal.
  
  5. **Reviewing and Analyzing Data:**
     - Users can generate reports and view summaries to track their financial progress.
  
  ---
  
  ## Future Enhancements
  - **Budgeting Tools:** Add features for setting financial goals and monitoring budget adherence.
  - **Analytics Dashboard:** Introduce visualizations such as pie charts and graphs for spending analysis.
  - **Multi-Currency Support:** Allow users to manage accounts and transactions in different currencies.
  - **Mobile App Integration:** Develop a mobile version for tracking finances on the go.
  
  ---
  
  ## Conclusion
  This personal finance tracker is designed to simplify financial management and empower users with actionable insights. By organizing financial data efficiently and presenting it intuitively, the app serves as a comprehensive solution for personal finance tracking.

