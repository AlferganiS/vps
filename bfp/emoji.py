import pandas as pd

def extract_emojis_v2(filename):
    
    emoji_dict = {}
    with open(filename, 'r', encoding='utf-8') as file:
        for line in file:
            if line.startswith('#') or line.strip() == '':
                continue
            
            parts = line.split(';')
            if len(parts) > 1:
                unicode_points = parts[0].strip()
                description_part = parts[1].split('#')
                if len(description_part) > 1:
                    emoji_description = description_part[1].strip()
                    if ' ' in emoji_description:
                        emoji = emoji_description.split()[0]
                        emoji_dict[emoji] = unicode_points

    return emoji_dict

def format_unicode(unicode_string):
    return unicode_string.replace(' ', ', ')

def create_emoji_dataframe(emoji_dict):
    emoji_df = pd.DataFrame(list(emoji_dict.items()), columns=['Emoji', 'Unicode Points'])
    emoji_df['Unicode Points'] = emoji_df['Unicode Points'].apply(format_unicode)
    return emoji_df

# Path to the emoji text file
file_path = './emoji.txt'

# Extracting emoji unicode mappings
emoji_unicode_map_v2 = extract_emojis_v2(file_path)

print(emoji_unicode_map_v2)


