interface Template {
  [key: string]: string;
}

export const templates: Template = {
  C: `#include<stdio.h>
#include<stdlib.h>

int main() {
    
    return 0;
}
    `,
  "C++14": `#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;
    
int main() {
        
    return 0;
}
        `,
  Java: `import java.util.*;
import java.lang.*;
import java.io.*;

class Flynt
{
	public static void main (String[] args) throws java.lang.Exception
	{
        
	}
}`,

  Python: "#Your code starts here",
};
