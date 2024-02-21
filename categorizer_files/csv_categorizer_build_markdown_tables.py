# import pandas as pd
# import os

# # Read the CSV file
# csv_file = 'leetcode_classifier_CSV.csv'
# df = pd.read_csv(csv_file)

# # Directory containing Python solutions
# solution_dir = 'leetcode_python_solutions/'

# # Function to generate markdown link for a given filename
# def generate_markdown_link(filename):
#     return f"[PySolution](./{solution_dir}{filename})"

# # Separate DataFrame based on 'Topic' column
# topic_tables = {}
# for topic, group in df.groupby('Topic'):
#     # Remove the 'Topic' column
#     group = group.drop(columns=['Topic'])

#     # Replace NaN or empty values with ""
#     for col in group.columns:
#         group[col] = group[col].fillna("")

#     # Iterate through each row in the group
#     for index, row in group.iterrows():
#         # Get the ID and corresponding filename
#         problem_id = row['ID']
#         filename = f"{problem_id}.py"

#         # Check if the file exists
#         if os.path.exists(os.path.join(solution_dir, filename)):
#             # Add PySolution link to the 'Solution' column
#             group.at[index, 'Solution'] = generate_markdown_link(filename)
#         else:
#             group.at[index, 'Solution'] = ""

#     topic_tables[topic] = group

# # Save each table to a new markdown file
# for topic, table in topic_tables.items():
#     markdown_file = f'{topic.replace(" ", "_")}_solutions.md'
#     table.to_markdown(markdown_file, index=False)
#     print(f"Markdown file '{markdown_file}' has been generated with PySolution links for topic '{topic}'.")


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

# Save all tables to a single markdown file
markdown_file = 'leetcode_solutions.md'
with open(markdown_file, 'w') as f:
    for topic, table in topic_tables.items():
        # Add big header for the topic
        f.write(f"# {topic}\n\n")
        # Write table to markdown
        f.write(table.to_markdown(index=False))
        f.write('\n\n')

print(f"Markdown file '{markdown_file}' has been generated with PySolution links separated by topic.")
