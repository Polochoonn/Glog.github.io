import os.path
import re
import hashlib
import random
import sys

def fastaParser(string):
  fasta = open(string, "r")
  sequence = ""
  for line in fasta.readlines():
    if line[0] != ">":
      if line[-1:] == "\n":
        sequence+=line[:-1]
      else :
        sequence+=line
  return sequence

def add_hash(x,y):
  return x+"_"+hashlib.sha1(y.encode()).hexdigest()[:5]

def input(sequence:str, name:str):
    jobname = name
    basejobname = "".join(jobname.split())
    basejobname = re.sub(r'\W+', '', basejobname)
    jobname = add_hash(basejobname, sequence)
    return jobname

#input(sys.argv[1], sys.argv[2])
