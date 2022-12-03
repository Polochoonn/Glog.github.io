import sys
import subprocess

# implement pip as a subprocess:
subprocess.run(["pip", "install", "-q", "--no-warn-conflicts", '"colabfold[alphafold-minus-jax] @ git+https://github.com/sokrypton/ColabFold"'])