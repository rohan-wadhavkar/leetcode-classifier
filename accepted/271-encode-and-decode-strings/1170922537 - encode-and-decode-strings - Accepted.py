class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        encodedString = ''
        for word in strs:
            encodedString += str(len(word)) + '#' + word
        return encodedString
        

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        if len(s)==0:
            return [""]

        res=[]
        i,right = 0,0
        while right < len(s):
            countStr = ''
            while s[i] != '#':
                countStr+=s[i]
                i+=1
            count = int(countStr)
            left = i+1
            right = left + count
            res.append(s[left:right])
            i=right
        
        return res






# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))