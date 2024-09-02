1. 文件操作命令
```
*** When you enter ubantu, the root belongs to Linux system, instead of C: or D: in windows system ***

ls #list out files
ls -l #total number of files

vim filename.txt #create a new file or edit the file

## How to use vim ## 
i #insert 
Esc #exit insert mode
: #back to command mode
w #write into the files
q #quit vim 
######################

cat filename.txt #view the file 

cp file1.txt file2.txt #copy from file1 to file2, when file2 does not exits, it will be created

rm file1.txt #delete the file

mv file1.txt file2.txt #move from file1 to file2, file1 will be deleted; while file2 will be created if it didn't exists; this operation can also be seen as change the name

cat test1.txt > test.txt #use test1 to cover test
cat test1.txt >> test.txt #add test1 to test

cat test.txt|wc #count the lines; words; bytes
cat test.txt|awk '{print$3}' #print the third word of each line 

## The use of command *|* and *>* (*>>*) ##
|,> ,>> means use the output of left command as the input of the right command
```
2. 目录命令
```
cd / #system dir, in which there is *mnt* with all your windows file in it 
cd ~ #the dir you enter ubantu, which is the user dir: /home/user
cd .. #back to last dir
##./## --current dir

mkdir dirname #create a sub dir in current dir, in other word, create a new file 

rmdir dirname #delete dir, only when the dir is empty

pwd #show current dir 

mv file dir #move one file to the dir; you should be at where the file is; **example: mv test.txt mytest

```