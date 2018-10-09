// bryan lee
// october 8, 2018
// sql notes - https://sqlbolt.com
//----------------------------------------
// BACKGROUND
//----------------------------------------
    // popular SQL databases including SQLite, MySQL, Postgres, Oracle and Microsoft SQL Server. All of them support the common SQL language standard
    // a relational database represents a collection of related (two-dimensional) tables. Each of the tables are similar to an Excel spreadsheet, with a fixed number of named columns (the attributes or properties of the table) and any number of rows of data.
//----------------------------------------
// QUERIES
//----------------------------------------
    // to retrieve data from a SQL database, we need to write SELECT statements, which are often colloquially refered to as queries.
    // a query in itself is just a statement which declares what data we are looking for, where to find it in the database, and optionally, how to transform it before it is returned. 
    // the most basic query we could write would be one that selects for a couple columns (properties) of the table with all the rows (instances).
        // "select" query for a specific columns
            // SELECT column, another_column, …
            // FROM mytable;
        // the result of this query will be a two-dimensional set of rows and columns, effectively a copy of the table, but only with the columns that we requested.
    // to retrieve all the columns of data from a table, use the asterisk (*) shorthand
        // Select query for all columns
            // SELECT * 
            // FROM mytable;
        // a simple way inspect a table by dumping all the data at once
    //
//----------------------------------------
// FILTERING
//----------------------------------------
    // to filter certain results from being returned, we need to use a WHERE clause in the query. The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not.
        // Select query with constraints
            // SELECT column, another_column, …
            // FROM mytable
            // WHERE condition
                // AND/OR another_condition
                // AND/OR …;
        // More complex clauses can be constructed by joining numerous AND or OR logical keywords (ie. num_wheels >= 4 AND doors <= 2).
            //----------------------------------------
            // Operator: =, !=, < <=, >, >=
            // Condition: Standard numerical operators
            // SQL Example: col_name != 4
            //----------------------------------------
            // Operator: BETWEEN … AND …
            // Condition: Number is within range of two values (inclusive)
            // SQL Example: col_name BETWEEN 1.5 AND 10.5
            //----------------------------------------
            // Operator: NOT BETWEEN … AND …
            // Condition: Number is not within range of two values (inclusive)
            // SQL Example: col_name NOT BETWEEN 1 AND 10
            //----------------------------------------
            // Operator: IN (…)
            // Condition: Number exists in a list
            // SQL Example: col_name IN (2, 4, 6)
            //----------------------------------------
            // Operator: NOT IN (…)
            // Condition: Number does not exist in a list
            // SQL Example: col_name NOT IN (1, 3, 5)
            //----------------------------------------
        //
    // SQL doesn't require you to write the keywords all capitalized, but as a convention, it helps people distinguish SQL keywords from column and tables names, and makes the query easier to read
    // When writing WHERE clauses with columns containing text data, SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching.
        //----------------------------------------
        // Operator: =
        // Condition: Case sensitive exact string comparison (notice the single equals)
        // SQL Example: col_name = "abc"
        //----------------------------------------
        // Operator: != or <>
        // Condition: Case sensitive exact string inequality comparison
        // SQL Example: col_name != "abcd"
        //----------------------------------------
        // Operator: LIKE
        // Condition: Case insensitive exact string comparison
        // SQL Example: col_name LIKE "ABC"
        //----------------------------------------
        // Operator: NOT LIKE
        // Condition: Case insensitive exact string inequality comparison
        // SQL Example: col_name NOT LIKE "ABCD"
        //----------------------------------------
        // Operator: %
        // Condition: Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE)
        // SQL Example: col_name LIKE "%AT%"(matches "AT", "ATTIC", "CAT" or even "BATS")
        //----------------------------------------
        // Operator: _
        // Condition: Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)
        // SQL Example: col_name LIKE "AN_"(matches "AND", but not "AN")
        //----------------------------------------
        // Operator: IN (…)
        // Condition: String exists in a list
        // SQL Example: col_name IN ("A", "B", "C")
        //----------------------------------------
        // Operator: NOT IN (…)
        // Condition: String does not exist in a list
        // SQL Example: col_name NOT IN ("D", "E", "F")
        //----------------------------------------
    // all strings must be quoted so that the query parser can distinguish words in the string from SQL keywords.
//----------------------------------------
// SORTING and MORE FILTERING
//----------------------------------------
    // even though the data in a database may be unique, the results of any particular query may not be
    // SQL provides a convenient way to discard rows that have a duplicate column value by using the DISTINCT keyword
        // Select query with unique results
            // SELECT DISTINCT column, another_column, …
            // FROM mytable
            // WHERE condition(s);
        // since the DISTINCT keyword will blindly remove duplicate rows, there is a way to discard duplicates based on specific columns using grouping and GROUP BY
    // most data in real databases are added in no particular column order.
    // as a result, it can be difficult to read through and understand the results of a query as the size of a table increases to thousands or even millions rows
    // ORDERING: SQL provides a way to sort your results by a given column in ascending or descending order using the ORDER BY clause
        // Select query with ordered results
            // SELECT column, another_column, …
            // FROM mytable
            // WHERE condition(s)
            // ORDER BY column ASC/DESC;
        // when an ORDER BY clause is specified, each row is sorted alpha-numerically based on the specified column's value.
        // in some databases, you can also specify a collation to better sort data containing international text.
    // LIMITING: used with the ORDER BY clause - LIMIT and OFFSET - useful optimization to indicate to the database the subset of the results you care about
    // the LIMIT will reduce the number of rows to return
    // the optional OFFSET will specify where to begin counting the number rows from
        // Select query with limited rows
            // SELECT column, another_column, …
            // FROM mytable
            // WHERE condition(s)
            // ORDER BY column ASC/DESC
            // LIMIT num_limit OFFSET num_offset;
        // websites like Reddit or Pinterest, the front page is a list of links sorted by popularity and time, and each subsequent page can be represented by sets of links at different offsets in the database. Using these clauses, the database can then execute queries faster and more efficiently by processing and returning only the requested content
        // when are LIMIT and OFFSET applied relative to the other parts of a query? they are generally done last after the other clauses have been applied.
    //
//----------------------------------------
// SIMPLE SELECT QUERIES
//---------------------------------------- 
    // combines all of the previous sections explaining each individual part of the SQL query
    // SELECT query
        // SELECT column, another_column, …
        // FROM mytable
        // WHERE condition(s)
        // ORDER BY column ASC/DESC
        // LIMIT num_limit OFFSET num_offset;
    //
//----------------------------------------
// Multi-table queries with JOINs
//---------------------------------------- 
// https://sqlbolt.com/lesson/select_queries_with_joins

