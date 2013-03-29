# Augments all parslet atoms with an accept method that will call back 
# to the visitor given.

# 
module Parslet::Atoms
  Base.class_eval do
    def accept(visitor)
      raise NotImplementedError, "No #accept method on #{self.class.name}."
    end
  end

  Str.class_eval do
    # Call back visitors #visit_str method. See parslet/export for an example.
    #
    def accept(visitor)
      visitor.visit_str(str)
    end
  end

  Entity.class_eval do
    # Call back visitors #visit_entity method. See parslet/export for an
    # example. 
    #
    def accept(visitor)
      visitor.visit_entity(name, block)
    end
  end

  Named.class_eval do
    # Call back visitors #visit_named method. See parslet/export for an
    # example. 
    #
    def accept(visitor)
      visitor.visit_named(name, parslet)
    end
  end

  Sequence.class_eval do
    # Call back visitors #visit_sequence method. See parslet/export for an
    # example. 
    #
    def accept(visitor)
      visitor.visit_sequence(parslets)
    end
  end

  Repetition.class_eval do
    # Call back visitors #visit_repetition method. See parslet/export for an
    # example. 
    #
    def accept(visitor)
      visitor.visit_repetition(@tag, min, max, parslet)
    end
  end

  Alternative.class_eval do
    # Call back visitors #visit_alternative method. See parslet/export for an
    # example. 
    #
    def accept(visitor)
      visitor.visit_alternative(alternatives)
    end
  end

  Lookahead.class_eval do
    # Call back visitors #visit_lookahead method. See parslet/export for an
    # example. 
    #
    def accept(visitor)
      visitor.visit_lookahead(positive, bound_parslet)
    end
  end

  Re.class_eval do
    # Call back visitors #visit_re method. See parslet/export for an example. 
    #
    def accept(visitor)
      visitor.visit_re(match)
    end
  end
end

Parslet::Parser.class_eval do
  # Call back visitors #visit_parser method.
  #
  def accept(visitor)
    visitor.visit_parser(root)
  end
end
