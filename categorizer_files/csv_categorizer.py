from cmath import nan
import pandas as pd
import os

# Read the CSV file
csv_file = 'leetcode_classifier_CSV.csv'
df = pd.read_csv(csv_file)

# Directory containing Python solutions
solution_dir = 'leetcode_python_solutions/'

# Function to generate markdown link for a given filename
def generate_markdown_link(filename):
    return f"[PySolution](./{solution_dir}{filename})"

# Iterate through each row in the DataFrame
for index, row in df.iterrows():
    # Replace NaN or empty values with ""
    for col in df.columns:
        if pd.isna(row[col]) or row[col] == "":
            df.at[index, col] = ""

    # Get the ID and corresponding filename
    problem_id = row['ID']
    filename = f"{problem_id}.py"

    # Check if the file exists
    if os.path.exists(os.path.join(solution_dir, filename)):
        # Add PySolution link to the 'Solutions' column
        df.at[index, 'Solution'] = generate_markdown_link(filename)

# Save the modified DataFrame as a markdown file
markdown_file = 'leetcode_solutions.md'
df.to_markdown(markdown_file, index=False)

print(f"Markdown file '{markdown_file}' has been generated with PySolution links.")
