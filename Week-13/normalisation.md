Normalisation --->
Normalization is necessary to ensure that the table only contains data directly related to the primary key, each data field contains only one data element, and to remove redundant (duplicated and unnecessary) data.

To normalize the given unnormalized table to 1NF, 2NF, and 3NF, we need to analyze and decompose the table while ensuring that it follows the rules of normalization. Each normalization level builds upon the previous level.

Unnormalized Table --->
Book ID  Title                  Author              Genre     Publisher      ISBN            Price
101     To Kill a Mockingbird   Harper Lee          Fiction   HarperCollins  978-0061120084   10.99
102     The Great Gatsby        F. Scott Fitzgerald Fiction   Scribner       978-0743273565   12.50
103     Principles of Physics   Jearl Walker        Science   Wiley          978-0321976444   50.00

1NF (First Normal Form) --->
Ensure that each column contains only atomic (indivisible) values.
There should be no repeating groups or arrays.
The original table already satisfies 1NF since each column contains atomic values.

2NF (Second Normal Form) --->
The table should be in 1NF.
Remove partial dependencies, i.e., columns that are dependent on only part of the primary key.
In our case, the primary key is not explicitly defined, but a reasonable assumption is that Book ID is the primary key.

Create a new table for Authors and another for Books, with Book ID as the primary key.

Authors Table:
Author              Book ID
Harper Lee          101
F. Scott Fitzgerald 102
Jearl Walker        103

Books Table:
Book ID  Title                  Genre     Publisher      ISBN            Price
101     To Kill a Mockingbird   Fiction   HarperCollins  978-0061120084   10.99
102     The Great Gatsby        Fiction   Scribner       978-0743273565   12.50
103     Principles of Physics   Science   Wiley          978-0321976444   50.00

3NF (Third Normal Form) --->
The table should be in 2NF.
Remove transitive dependencies, i.e., columns that depend on non-key attributes.
In the Books Table, we have a transitive dependency between Publisher and Book ID. Publisher is dependent on Book ID, which is a non-key attribute.

Create a new table for Publishers with Publisher as the primary key.

Publishers Table:
Publisher       Book ID
HarperCollins   101
Scribner        102
Wiley           103

Books Table (updated):
Book ID  Title                  Genre     ISBN            Price
101     To Kill a Mockingbird   Fiction   978-0061120084   10.99
102     The Great Gatsby        Fiction   978-0743273565   12.50
103     Principles of Physics  Science   978-0321976444   50.00


