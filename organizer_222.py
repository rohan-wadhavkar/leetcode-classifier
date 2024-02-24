import re

def process_markdown(input_file, output_file):
    with open(input_file, 'r') as f:
        markdown_content = f.read()

    # Define a function to add 'Topic' column to each table
    def add_topic_column(match):
        table = match.group(0)
        heading = match.group(1)
        # Split the table into lines
        lines = table.split('\n')
        # Find the header line
        header_line = lines[1]
        # Add 'Topic' to the header line
        new_header_line = re.sub(r'\| Problem Name \|', '| Problem Name | Topic |', header_line)
        lines[1] = new_header_line
        # Find the index of the header line
        header_index = markdown_content.index(header_line)
        # Find the index of the end of the header line
        end_of_header_index = header_index + len(header_line)
        # Find the index of the beginning of the table content
        start_of_table_index = end_of_header_index + 1
        # Extract the table content
        table_content = markdown_content[start_of_table_index:]
        # Find the end of the table content
        end_of_table_index = start_of_table_index + table_content.index('\n\n')
        # Split the table content into rows
        rows = table_content.split('\n')[1:-1]  # Exclude header and footer empty lines
        # Extract the topic from the heading
        topic = re.search(r'\[(.*?)\]', heading).group(1)
        # Add the 'Topic' for each row
        new_rows = [re.sub(r'^\|(.+)\|', r'\g<0>' + topic + '|', row) for row in rows]
        # Combine all lines back to recreate the modified table
        modified_table = '\n'.join(lines[:-1] + new_rows + [lines[-1]])
        # Return the modified table
        return modified_table

    # Add 'Topic' column to each table
    new_markdown_content = re.sub(r'##(\w+)\n\n\| ID \|(.+)\|\n(.*?)(?=\n\n##|\Z)', lambda m: add_topic_column(m), markdown_content, flags=re.DOTALL)

    # Write the modified content to a new markdown file
    with open(output_file, 'w') as f:
        f.write(new_markdown_content)

# Specify input and output file paths
input_file = 'lc_md.md'
output_file = 'output.md'

# Process the markdown file
process_markdown(input_file, output_file)

print("Markdown processing complete. Output written to", output_file)
