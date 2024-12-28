```mermaid
erDiagram

    users {
        int8 id PK
        text name
        text email
        text password_hash
        text photo
    }

    accounts {
        int8 id PK
        int8 user_id FK
        int8 category_id FK
        text name
        numeric balance
        int8 icon_id FK
    }

    transactions {
        int8 id PK
        int8 account_id FK
        int8 target_account_id FK
        int8 category_id FK
        numeric amount
        date date
        text description
    }

    account_categories {
        int8 id PK
        text name
        int8 icon_id FK
    }

    transaction_categories {
        int8 id PK
        text name
        int8 icon_id FK
    }

    icons {
        int8 id PK
        text name
        text path
    }

    users ||--o{ accounts : owns
    accounts ||--o{ transactions : has
    accounts }o--|| account_categories : belongs_to
    accounts ||--|| icons : uses
    transactions ||--|| transaction_categories : categorized_as
    account_categories ||--|| icons : represented_by
    transaction_categories ||--|| icons : represented_by

```