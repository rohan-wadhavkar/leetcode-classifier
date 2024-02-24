import pandas as pd
import os
import re

# Read the CSV file
csv_file = 'leetcode_classifier_CSV.csv'
df = pd.read_csv(csv_file)

# Directory containing Python solutions
solution_dir = 'leetcode_python_solutions/'

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

# Replace NaN or empty values with ""
df = df.fillna("")

# Separate DataFrame based on 'Topic' column
topic_tables = {}
for topic, group in df.groupby('Topic'):
    # Remove the 'Topic' column
    group = group.drop(columns=['Topic'])

    # Iterate through each row in the group
    for index, row in group.iterrows():
        # Get the ID and corresponding filename
        problem_id = row['ID']
        filename = f"{problem_id}.py"

        # Check if the file exists
        if os.path.exists(os.path.join(solution_dir, filename)):
            # Add PySolution link to the 'Solution' column
            group.at[index, 'Solution'] = generate_markdown_link(filename)
        else:
            group.at[index, 'Solution'] = ""

    topic_tables[topic] = group

# Generate markdown content with hyperlinks for IDs
markdown_with_links = ""
for topic, table in topic_tables.items():
    markdown_with_links += f"## {topic}\n\n"
    markdown_with_links += "| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |\n"
    markdown_with_links += "|----|--------------|------------|-----------|----------|-----------------|\n"
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
markdown_file_with_links = 'leetcode_solutions_with_links2.md'
with open(markdown_file_with_links, 'w') as f:
    f.write(markdown_with_links)

print(f"Markdown file '{markdown_file_with_links}' has been generated with hyperlinks for IDs.")
