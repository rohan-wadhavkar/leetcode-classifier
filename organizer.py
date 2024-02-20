import os
import pandas as pd
import re

def append_solutions_to_markdown(markdown_file, solutions_directory):
    # Read the Markdown file
    with open(markdown_file, 'r') as file:
        markdown_content = file.read()

    # Extract tables from the Markdown content using regular expressions
    tables = re.findall(r'\|(.+?)\|\n\|( *-+\|)+\n((?:\|.*\|\n)+)', markdown_content, re.MULTILINE)

    # Iterate through each table
    for table_match in tables:
        # Parse the table using pandas
        table_content = table_match[2]
        table_df = pd.read_csv(pd.compat.StringIO(table_content), sep='|', engine='python')

        # Add 'Solution' column to the DataFrame if it doesn't exist
        if 'Solution' not in table_df.columns:
            table_df['Solution'] = ''

        # Iterate through rows to find corresponding solution files
        for index, row in table_df.iterrows():
            # Extract ID from the row
            ID = str(row['ID']).strip()

            # Look for corresponding solution file in the solutions directory
            solution_file = os.path.join(solutions_directory, ID + '.py')

            # If the solution file exists, append a link to it in the 'Solution' column
            if os.path.isfile(solution_file):
                table_df.at[index, 'Solution'] = f'[Solution]({solution_file})'

        # Convert the DataFrame back to Markdown format
        modified_table_content = table_df.to_markdown(index=False, tablefmt='pipe')

        # Replace the original table in the Markdown content with the modified table
        markdown_content = markdown_content.replace(table_match[2], modified_table_content)

    # Write the modified Markdown content back to the file
    with open(markdown_file, 'w') as file:
        file.write(markdown_content)

# Example usage
markdown_file = 'pythonproblems.md'
solutions_directory = 'leetcode_python_solutions'

append_solutions_to_markdown(markdown_file, solutions_directory)
