import json
import os

def file_to_json(file_path, output_file_name):
    data = {}
    
    with open(file_path, 'r') as file:
        for line in file:
            # Split the line into key and value parts
            key, value = line.strip().split('\t')
            
            # Convert the key to an integer
            key = int(key)
            
            # Split the value by commas to handle multiple values
            values = value.split(',')
            
            # Add the key-value pair to the dictionary with double quotes around the key
            if len(values) == 1:
                data[f'"{key}"'] = value

            else:
                data[f'"{key}"'] = values


    print(len(data))
    # Convert the dictionary to JSON
    json_data = json.dumps(data, indent=4)
    
    # Get the current directory
    current_directory = os.getcwd()
    
    # Create the full output file path in the current directory
    output_file_path = os.path.join(current_directory, output_file_name)
    
    # Write the JSON data to the output file
    with open(output_file_path, 'w') as output_file:
        output_file.write(json_data)
    
    print(f"JSON data has been written to {output_file_path}")

# Example usage
file_path = 'trigger_map.txt'  # Replace with your input file path
output_file_name = 'trigger_mapJson.json'  # Output file name in the current directory
file_to_json(file_path, output_file_name)
