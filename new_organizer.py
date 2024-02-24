import os
import re
import pandas as pd

# Define function to extract IDs from markdown table
def extract_ids_from_markdown(markdown_file):
    with open(markdown_file, 'r') as file:
        markdown_content = file.read()

    ids = []
    
    id_hyperlinks = {}
    # Find all IDs with hyperlinks
    id_links = re.findall(r'\[([0-9]+)\]\(([^)]+)\)', markdown_content)
    # Store in a dictionary
    for id, link in id_links:
        id_hyperlinks[id] = link
        ids.append(id)


    return ids


def find_folder(start_dir, folder_name_partial):
    """
    Recursively searches for a folder whose name starts with the provided partial name.
    
    Args:
    - start_dir (str): The directory to start the search from.
    - folder_name_partial (str): The partial name of the folder to search for.
    
    Returns:
    - list: A list of paths to folders matching the criteria.
    """

    # Iterate over all the items in the current directory
    for item in os.listdir(start_dir):
        item_path = os.path.join(start_dir, item)
        
        # Check if the item is a directory
        if os.path.isdir(item_path):
            # Check if the directory name starts with the provided partial name
            if item.startswith(folder_name_partial):
                return item_path
            # If it's not the target folder, recursively search within it
            else:
                print(f'Could not find folder for {folder_name_partial}')
    
def find_id(start_dir, folder_name_partial):
    return None



# Define function to update markdown table
def update_markdown_table(markdown_file, ids):
    # Read markdown file into dataframe
    df = pd.read_csv(markdown_file, sep='|')
    
    # Add new columns
    df['Problem Statement'] = ''
    df['MySubmission'] = ''
    
    print("Number of IDs extracted:", len(ids))
    print("Number of rows in DataFrame:", len(df))
    
    # Iterate through IDs and update corresponding rows
    for idx, id_num in enumerate(ids):
        print("Processing ID:", id_num)

        folder_path = find_folder('accepted', f'{id_num}-')
        # Check if folder exists
        if folder_path is not None and os.path.exists(folder_path):
             # List all files in the directory
            files = os.listdir(folder_path)

            # Update Problem Statement column with hyperlinks
            problem_statement = ''
            my_submission = ''
            # Check if any file ends with ".html"
            for file in files:
                if file.endswith(".html"):
                    problem_statement += f'[html](file://{os.path.abspath(file)})'
                elif file.endswith(".txt"):
                    problem_statement += f'[txt](file://{os.path.abspath(file)})'
                # Update MySubmission column with hyperlink
                elif file.endswith(".py"):
                     my_submission += f'[MyPy](file://{os.path.abspath(file)})'
                    
                
            df.at[idx, 'Problem Statement'] = problem_statement.strip()
            df.at[idx, 'MySubmission'] = my_submission.strip()

            
            
            # if os.path.exists(html_file):
            #     problem_statement += f' [html](file://{os.path.abspath(html_file)})'
            # if os.path.exists(txt_file):
            #     problem_statement += f' [txt](file://{os.path.abspath(txt_file)})'
            # df.at[idx, 'Problem Statement'] = problem_statement.strip()
            
            
        else:
            print(f"Folder for ID {id_num} does not exist.")
            # You can add handling for this case if necessary
    
    # Write updated dataframe to markdown file
    df.to_csv(markdown_file, sep='|', index=False)

# Main function
def main():
    markdown_file = 'lc_md.md'
    ids = extract_ids_from_markdown(markdown_file)
    update_markdown_table(markdown_file, ids)

if __name__ == "__main__":
    main()
