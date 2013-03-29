module Parslet
  module Atoms
    # The precedence module controls parenthesis during the #inspect printing
    # of parslets. It is not relevant to other aspects of the parsing.
    #
    module Precedence
      prec = 0
      BASE       = (prec+=1)    # everything else
      LOOKAHEAD  = (prec+=1)    # &SOMETHING
      REPETITION = (prec+=1)    # 'a'+, 'a'?
      SEQUENCE   = (prec+=1)    # 'a' 'b'
      ALTERNATE  = (prec+=1)    # 'a' | 'b'
      OUTER      = (prec+=1)    # printing is done here.
    end
  end
end
