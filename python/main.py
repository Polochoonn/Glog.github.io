from colab import *
import sys
   
if __name__ == "__main__":
    sequence = fastaParser(sys.argv[1])
    test = input(sequence,sys.argv[2])
    sys.stdout.write(test)
