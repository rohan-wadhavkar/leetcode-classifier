import pandas as pd
import os
import re

# Read the CSV file
csv_file = 'leetcode_classifier_CSV.csv'
df = pd.read_csv(csv_file)

# Directory containing Python solutions
solution_dir = 'leetcode_python_solutions/'

# Directory containing accepted submissions
accepted_dir = 'accepted/'

# Read the README.md file to extract IDs and hyperlinks
readme_file = 'README.md'
id_hyperlinks = {}
with open(readme_file, 'r') as f:
    readme_content = f.read()
    # Find all IDs with hyperlinks
    id_links = re.findall(r'\[([0-9]+)\]\(([^)]+)\)', readme_content)
    # Store in a dictionary
    for id, link in id_links:
        id_hyperlinks[id] = link

# Function to generate markdown link for a given filename
def generate_markdown_link(filename):
    return f"[PySolution](./{solution_dir}{filename})"

# Function to generate markdown link for HTML file
def generate_html_link(folder_path):
    html_file = os.path.join(folder_path, 'problem.html')
    if os.path.exists(html_file):
        return f"[html](./{html_file})"
    else:
        return ""

# Function to generate markdown link for TXT file
def generate_txt_link(folder_path):
    txt_file = os.path.join(folder_path, 'problem.txt')
    if os.path.exists(txt_file):
        return f"[txt](./{txt_file})"
    else:
        return ""

# Replace NaN or empty values with ""
df = df.fillna("")

# Add new columns for Problem Statement and MySubmission
df['Problem Statement'] = ""
df['MySubmission'] = ""

# Iterate through each row in the DataFrame
for index, row in df.iterrows():
    # Get the ID and corresponding folder name
    problem_id = row['ID']
    folder_name = f"{problem_id}-"

    # Check if the folder exists
    folder_path = os.path.join(accepted_dir, folder_name)
    print(f"Processing ID: {problem_id}, Folder: {folder_path}")  # Debugging print statement
    if os.path.exists(folder_path):
        # Generate hyperlinks for HTML and TXT files
        html_link = generate_html_link(folder_path)
        txt_link = generate_txt_link(folder_path)
        print(f"HTML Link: {html_link}, TXT Link: {txt_link}")  # Debugging print statement

        # Add hyperlinks to the 'Problem Statement' column
        problem_statement = ""
        if html_link:
            problem_statement += f"{html_link} "
        if txt_link:
            problem_statement += f"{txt_link}"
        print(f"Problem Statement: {problem_statement}")  # Debugging print statement
        df.at[index, 'Problem Statement'] = problem_statement.strip()

        # Generate hyperlink for Python file
        py_file = os.path.join(folder_path, f"{problem_id}.py")
        if os.path.exists(py_file):
            df.at[index, 'MySubmission'] = f"[MyPy](./{py_file})"
        else:
            df.at[index, 'MySubmission'] = "MyPy"

# Separate DataFrame based on 'Topic' column
topic_tables = {}
for topic, group in df.groupby('Topic'):
    # Remove the 'Topic' column
    group = group.drop(columns=['Topic'])

    # Add the new columns to the front of the DataFrame
    group = group[['ID', 'Problem Name', 'Difficulty', 'Problem Statement', 'Solution', 'MySubmission', 'Similar problems']]

    topic_tables[topic] = group

# Generate markdown content with hyperlinks for IDs
markdown_with_links = ""
for topic, table in topic_tables.items():
    markdown_with_links += f"## {topic}\n\n"
    markdown_with_links += "| ID | Problem Name | Difficulty | Problem Statement | Solution | MySubmission | Similar problems |\n"
    markdown_with_links += "|----|--------------|------------|--------------------|----------|--------------|-----------------|\n"
    for index, row in table.iterrows():
        for col in table.columns:
            # If the column is 'ID' and the ID has a corresponding hyperlink
            if col == 'ID' and str(row[col]) in id_hyperlinks:
                markdown_with_links += f"[{row[col]}]({id_hyperlinks[str(row[col])]})"
            else:
                markdown_with_links += str(row[col])
            markdown_with_links += " | "
        markdown_with_links += "\n"
    markdown_with_links += "\n\n"

# Save markdown content with hyperlinks to a new file
markdown_file_with_links = 'leetcode_solutions_with_subs.md'
with open(markdown_file_with_links, 'w') as f:
    f.write(markdown_with_links)

print(f"Markdown file '{markdown_file_with_links}' has been generated with hyperlinks for IDs and additional columns.")
