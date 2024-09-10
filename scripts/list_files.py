import os

def list_files(folder, excluded_folders, included_extensions):
  file_list = []
  for root, dirs, files in os.walk(folder):
    # Exclude specified folders
    dirs[:] = [d for d in dirs if d not in excluded_folders]
    for file in files:
      # Include files with given extensions only
      if file.endswith(tuple(included_extensions)):
        file_list.append(os.path.join(root, file))

  return file_list

def create_text_file(file_list, output_file):
  with open(output_file, 'w') as f:
    # add comma separated file names
    f.write(str.format("Project file structure:\n{}\n\n", "\n".join(file_list)))
    for file in file_list:
      with open(file, 'r') as file_content:
        print(f"Reading file: {file}")
        f.write(f"STARTFILE: {file}\n")
        f.write(file_content.read())
        f.write(f"\nENDFILE: {file}\n\n")

# Example usage
folder = '.'
excluded_folders = [
  'node_modules',
  'dist',
  'docs',
  '.expo',
  '.next',
  '.git',
  '.idea',
  'build',
  'out',
  'target',
  'debug',
  'release',
  'bin',
  'obj',
]
included_extensions = [
  '.js',
  '.ts',
  '.tsx',
  '.css',
  '.html',
  'translation.json',
  '.sql',
  '.java',
  '.xml',
  '.properties',
  '.cs',
  # '.json',
  'tsconfig.json',
  'Dockerfile',
  'docker-compose.yml',
  'package.json',
  '.eslintrc.js',
  '.prettierrc.js',
  'deploy.sh',
  'nest-cli.json',
  # 'wordsDatabase.json',
]

output_file = 'output.txt'

file_list = list_files(folder, excluded_folders, included_extensions)
create_text_file(file_list, output_file)