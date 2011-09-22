var search_data = {"index":{"searchIndex":["parslet","atoms","alternative","base","cause","fail","success","context","dsl","entity","lookahead","named","re","repetition","sequence","str","transform","classmethods","errortree","expression","treetop","invalidsliceoperation","parsefailed","parser","visitors","citrus","treetop","pattern","slice","source","transform","unconsumedinput","+()","==()",">>()","absent?()","absnt?()","accept()","accept()","accept()","accept()","accept()","accept()","accept()","accept()","accept()","any()","apply()","apply()","as()","ascii_tree()","cache()","call_on_match()","cause()","element_match()","element_match_hash()","eof?()","error?()","error?()","error_tree()","foldl()","inspect()","line_and_column()","line_and_column()","match()","match()","match()","maybe()","new()","new()","new()","new()","new()","new()","new()","new()","new()","new()","nodes()","parse()","parse()","parse_with_debug()","parslet()","pos()","pos=()","present?()","prsnt?()","read()","repeat()","root()","rule()","rule()","rule()","sequence()","simple()","size()","str()","subtree()","to_citrus()","to_f()","to_i()","to_int()","to_parslet()","to_s()","to_s()","to_s()","to_slice()","to_str()","to_sym()","to_treetop()","transform()","try()","visit_alternative()","visit_alternative()","visit_alternative()","visit_entity()","visit_entity()","visit_lookahead()","visit_lookahead()","visit_named()","visit_named()","visit_re()","visit_re()","visit_repetition()","visit_repetition()","visit_repetition()","visit_sequence()","visit_sequence()","visit_str()","visit_str()","|()","readme","parslet.rb","atoms.rb","alternative.rb","base.rb","context.rb","dsl.rb","entity.rb","lookahead.rb","named.rb","re.rb","repetition.rb","sequence.rb","str.rb","transform.rb","visitor.rb","convenience.rb","error_tree.rb","export.rb","expression.rb","treetop.rb","parser.rb","pattern.rb","binding.rb","context.rb","rspec.rb","slice.rb","source.rb","line_cache.rb","transform.rb"],"longSearchIndex":["lib/parslet.rb","parslet","parslet::atoms","parslet::atoms","parslet::atoms::base","parslet::atoms::base","parslet::atoms::base","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet::atoms","parslet","parslet","parslet","parslet::expression","parslet","parslet","parslet","parslet::parser","parslet::parser::visitors","parslet::parser::visitors","parslet","parslet","parslet","parslet","parslet","parslet::slice","parslet::slice","parslet::atoms::dsl","parslet::atoms::dsl","parslet::atoms::dsl","parslet::atoms::alternative","parslet::atoms::base","parslet::atoms::entity","parslet::atoms::lookahead","parslet::atoms::named","parslet::atoms::re","parslet::atoms::repetition","parslet::atoms::sequence","parslet::atoms::str","parslet","parslet::atoms::transform","parslet::transform","parslet::atoms::dsl","parslet::errortree","parslet::atoms::context","parslet::pattern","parslet::errortree","parslet::pattern","parslet::pattern","parslet::source","parslet::atoms::base::fail","parslet::atoms::base::success","parslet::atoms::base","parslet::atoms::base","parslet::slice","parslet::slice","parslet::source","parslet","parslet::pattern","parslet::slice","parslet::atoms::dsl","parslet::atoms::alternative","parslet::atoms::context","parslet::atoms::repetition","parslet::atoms::sequence","parslet::atoms::str","parslet::expression","parslet::parser::visitors::citrus","parslet::pattern","parslet::slice","parslet::source","parslet::errortree","parslet::atoms::base","parslet::expression","parslet::atoms::base","parslet::atoms::entity","parslet::source","parslet::source","parslet::atoms::dsl","parslet::atoms::dsl","parslet::source","parslet::atoms::dsl","parslet::parser","parslet::classmethods","parslet::transform","parslet::transform","parslet","parslet","parslet::slice","parslet","parslet","parslet::parser","parslet::slice","parslet::slice","parslet::slice","parslet::expression","parslet::atoms::base::cause","parslet::errortree","parslet::slice","parslet::slice","parslet::slice","parslet::slice","parslet::parser","parslet::expression","parslet::atoms::base","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::parser::visitors::treetop","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::parser::visitors::treetop","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::atoms::transform","parslet::parser::visitors::citrus","parslet::atoms::dsl","files/readme.html","files/lib/parslet_rb.html","files/lib/parslet/atoms_rb.html","files/lib/parslet/atoms/alternative_rb.html","files/lib/parslet/atoms/base_rb.html","files/lib/parslet/atoms/context_rb.html","files/lib/parslet/atoms/dsl_rb.html","files/lib/parslet/atoms/entity_rb.html","files/lib/parslet/atoms/lookahead_rb.html","files/lib/parslet/atoms/named_rb.html","files/lib/parslet/atoms/re_rb.html","files/lib/parslet/atoms/repetition_rb.html","files/lib/parslet/atoms/sequence_rb.html","files/lib/parslet/atoms/str_rb.html","files/lib/parslet/atoms/transform_rb.html","files/lib/parslet/atoms/visitor_rb.html","files/lib/parslet/convenience_rb.html","files/lib/parslet/error_tree_rb.html","files/lib/parslet/export_rb.html","files/lib/parslet/expression_rb.html","files/lib/parslet/expression/treetop_rb.html","files/lib/parslet/parser_rb.html","files/lib/parslet/pattern_rb.html","files/lib/parslet/pattern/binding_rb.html","files/lib/parslet/pattern/context_rb.html","files/lib/parslet/rig/rspec_rb.html","files/lib/parslet/slice_rb.html","files/lib/parslet/source_rb.html","files/lib/parslet/source/line_cache_rb.html","files/lib/parslet/transform_rb.html"],"info":[["Parslet","lib/parslet.rb","classes/Parslet.html"," < ","A simple parser generator library. Typical usage would look like this:  require 'parslet' class MyParser",1],["Atoms","Parslet","classes/Parslet/Atoms.html"," < ","--- This is where parslets name comes from: Small parser atoms. ",1],["Alternative","Parslet::Atoms","classes/Parslet/Atoms/Alternative.html"," < Parslet::Atoms::Base","Alternative during matching. Contains a list of parslets that is tried each one in turn. Only fails if",1],["Base","Parslet::Atoms","classes/Parslet/Atoms/Base.html"," < Object","Base class for all parslets, handles orchestration of calls and implements a lot of the operator and",1],["Cause","Parslet::Atoms::Base","classes/Parslet/Atoms/Base/Cause.html"," < Struct.new(:message, :source, :pos)","An internal class that allows delaying the construction of error messages (as strings) until we really",1],["Fail","Parslet::Atoms::Base","classes/Parslet/Atoms/Base/Fail.html"," < Struct.new(:message)","Internally, all parsing functions return either an instance of Fail  or an instance of Success.  ",1],["Success","Parslet::Atoms::Base","classes/Parslet/Atoms/Base/Success.html"," < Struct.new(:result)","Internally, all parsing functions return either an instance of Fail  or an instance of Success. ",1],["Context","Parslet::Atoms","classes/Parslet/Atoms/Context.html"," < Object","Helper class that implements a transient cache that maps position and parslet object to results. This",1],["DSL","Parslet::Atoms","classes/Parslet/Atoms/DSL.html"," < ","A mixin module that defines operations that can be called on any subclass of Parslet::Atoms::Base. These",1],["Entity","Parslet::Atoms","classes/Parslet/Atoms/Entity.html"," < Parslet::Atoms::Base","This wraps pieces of parslet definition and gives them a name. The wrapped piece is lazily evaluated",1],["Lookahead","Parslet::Atoms","classes/Parslet/Atoms/Lookahead.html"," < Parslet::Atoms::Base","Either positive or negative lookahead, doesn't consume its input.  Example:  str('foo').present? # matches",1],["Named","Parslet::Atoms","classes/Parslet/Atoms/Named.html"," < Parslet::Atoms::Base","Names a match to influence tree construction.  Example:  str('foo')            # will return 'foo', ",1],["Re","Parslet::Atoms","classes/Parslet/Atoms/Re.html"," < Parslet::Atoms::Base","Matches a special kind of regular expression that only ever matches one character at a time. Useful members",1],["Repetition","Parslet::Atoms","classes/Parslet/Atoms/Repetition.html"," < Parslet::Atoms::Base","Matches a parslet repeatedly.  Example:  str('a').repeat(1,3)  # matches 'a' at least once, but at most",1],["Sequence","Parslet::Atoms","classes/Parslet/Atoms/Sequence.html"," < Parslet::Atoms::Base","A sequence of parslets, matched from left to right. Denoted by '>>' Example:  str('a') >> str('b')  #",1],["Str","Parslet::Atoms","classes/Parslet/Atoms/Str.html"," < Parslet::Atoms::Base","Matches a string of characters.  Example:  str('foo') # matches 'foo' ",1],["Transform","Parslet::Atoms","classes/Parslet/Atoms/Transform.html"," < Object","A helper class that allows transforming one grammar into another. You can use this class as a base class:",1],["ClassMethods","Parslet","classes/Parslet/ClassMethods.html"," < ","",1],["ErrorTree","Parslet","classes/Parslet/ErrorTree.html"," < Object","A tree structure that contains parse error messages. This can be used to give the user a detailed report",1],["Expression","Parslet","classes/Parslet/Expression.html"," < Object","Allows specifying rules as strings using the exact same grammar that treetop does, minus the actions.",1],["Treetop","Parslet::Expression","classes/Parslet/Expression/Treetop.html"," < Object","",1],["InvalidSliceOperation","Parslet","classes/Parslet/InvalidSliceOperation.html"," < StandardError","Raised when trying to do an operation on slices that cannot succeed, like adding non-adjacent slices.",1],["ParseFailed","Parslet","classes/Parslet/ParseFailed.html"," < StandardError","Raised when the parse failed to match or to consume all its input. It contains the message that should",1],["Parser","Parslet","classes/Parslet/Parser.html"," < Parslet::Atoms::Base","The base class for all your parsers. Use as follows:  require 'parslet' class MyParser < Parslet::Parser",1],["Visitors","Parslet::Parser","classes/Parslet/Parser/Visitors.html"," < ","",1],["Citrus","Parslet::Parser::Visitors","classes/Parslet/Parser/Visitors/Citrus.html"," < Object","",1],["Treetop","Parslet::Parser::Visitors","classes/Parslet/Parser/Visitors/Treetop.html"," < Citrus","",1],["Pattern","Parslet","classes/Parslet/Pattern.html"," < Object","Matches trees against expressions. Trees are formed by arrays and hashes for expressing membership and",1],["Slice","Parslet","classes/Parslet/Slice.html"," < Object","A slice is a small part from the parse input. A slice mainly behaves like any other string, except that",1],["Source","Parslet","classes/Parslet/Source.html"," < Object","Wraps the input IO to parslet. The interface defined by this class is  smaller than what IO offers, but",1],["Transform","Parslet","classes/Parslet/Transform.html"," < Object","Transforms an expression tree into something else. The transformation performs a depth-first, post-order",1],["UnconsumedInput","Parslet","classes/Parslet/UnconsumedInput.html"," < ParseFailed","Raised when the parse operation didn't consume all of its input. In this case, it makes only limited",1],["+","Parslet::Slice","classes/Parslet/Slice.html#M000130","(other)","Concatenate two slices; it is assumed that the second slice begins  where the first one ends. The offset",2],["==","Parslet::Slice","classes/Parslet/Slice.html#M000127","(other)","Compares slices to other slices or strings. ",2],[">>","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000023","(parslet)","Chains two parslet atoms together as a sequence.  Example:  str('a') >> str('b') ",2],["absent?","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000030","()","Tests for absence of a parslet atom in the input stream without consuming it.  Example:  # Only proceed",2],["absnt?","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000033","()","Alias for #absent?",2],["accept","Parslet::Atoms::Alternative","classes/Parslet/Atoms/Alternative.html#M000084","(visitor)","Call back visitors #alternative method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Base","classes/Parslet/Atoms/Base.html#M000073","(visitor)","",2],["accept","Parslet::Atoms::Entity","classes/Parslet/Atoms/Entity.html#M000075","(visitor)","Call back visitors #entity method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Lookahead","classes/Parslet/Atoms/Lookahead.html#M000085","(visitor)","Call back visitors #lookahead method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Named","classes/Parslet/Atoms/Named.html#M000081","(visitor)","Call back visitors #named method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Re","classes/Parslet/Atoms/Re.html#M000086","(visitor)","Call back visitors #re method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Repetition","classes/Parslet/Atoms/Repetition.html#M000083","(visitor)","Call back visitors #repetition method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Sequence","classes/Parslet/Atoms/Sequence.html#M000082","(visitor)","Call back visitors #sequence method. See parslet/export for an example.  ",2],["accept","Parslet::Atoms::Str","classes/Parslet/Atoms/Str.html#M000074","(visitor)","Call back visitors #str method. See parslet/export for an example.  ",2],["any","Parslet","classes/Parslet.html#M000161","()","Returns an atom matching any character. It acts like the '.' (dot) character in regular expressions.",2],["apply","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000071","(grammar)","Applies a transformation to a grammar and returns a new grammar that  is the result of the transform.",2],["apply","Parslet::Transform","classes/Parslet/Transform.html#M000153","(obj)","Applies the transformation to a tree that is generated by Parslet::Parser or a simple parslet. Transformation",2],["as","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000038","(name)","Marks a parslet atom as important for the tree output. This must be used  to achieve meaningful output",2],["ascii_tree","Parslet::ErrorTree","classes/Parslet/ErrorTree.html#M000096","()","Returns an ascii tree representation of the causes of this node and its children.  ",2],["cache","Parslet::Atoms::Context","classes/Parslet/Atoms/Context.html#M000013","(obj, source, &block)","Caches a parse answer for obj at source.pos. Applying the same parslet at one position of input always",2],["call_on_match","Parslet::Pattern","classes/Parslet/Pattern.html#M000120","(bindings, block)","Executes the block on the bindings obtained by #match, if such a match can be made. Contains the logic",2],["cause","Parslet::ErrorTree","classes/Parslet/ErrorTree.html#M000095","()","",2],["element_match","Parslet::Pattern","classes/Parslet/Pattern.html#M000122","(tree, exp, bindings)","Returns true if the tree element given by +tree+ matches the expression given by +exp+. This match must",2],["element_match_hash","Parslet::Pattern","classes/Parslet/Pattern.html#M000126","(tree, exp, bindings)","",2],["eof?","Parslet::Source","classes/Parslet/Source.html#M000142","()","",2],["error?","Parslet::Atoms::Base::Fail","classes/Parslet/Atoms/Base/Fail.html#M000003","()","",2],["error?","Parslet::Atoms::Base::Success","classes/Parslet/Atoms/Base/Success.html#M000004","()","",2],["error_tree","Parslet::Atoms::Base","classes/Parslet/Atoms/Base.html#M000028","()","Error tree returns what went wrong here plus what went wrong inside  subexpressions as a tree. The error",2],["foldl","Parslet::Atoms::Base","classes/Parslet/Atoms/Base.html#M000011","(list, &block)","Lisp style fold left where the first element builds the basis for  an inject.  ",2],["inspect","Parslet::Slice","classes/Parslet/Slice.html#M000139","()","Prints the slice as <code>\"string\"@offset</code>. ",2],["line_and_column","Parslet::Slice","classes/Parslet/Slice.html#M000131","()","Returns a <line, column> tuple referring to the original input. ",2],["line_and_column","Parslet::Source","classes/Parslet/Source.html#M000145","(position=nil)","Returns a <line, column> tuple for the given position. If no position is given, line/column information",2],["match","Parslet","classes/Parslet.html#M000156","(str=nil)","Returns an atom matching a character class. All regular expressions can be used, as long as they match",2],["match","Parslet::Pattern","classes/Parslet/Pattern.html#M000119","(subtree)","Decides if the given subtree matches this pattern. Returns the bindings made on a successful match or",2],["match","Parslet::Slice","classes/Parslet/Slice.html#M000128","(regexp)","Match regular expressions. ",2],["maybe","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000022","()","Returns a new parslet atom that is only maybe present in the input. This is synonymous to calling #repeat(0,1).",2],["new","Parslet::Atoms::Alternative","classes/Parslet/Atoms/Alternative.html#M000000","(*alternatives)","Constructs an Alternative instance using all given parslets in the order given. This is what happens",2],["new","Parslet::Atoms::Context","classes/Parslet/Atoms/Context.html#M000012","()","",2],["new","Parslet::Atoms::Repetition","classes/Parslet/Atoms/Repetition.html#M000056","(parslet, min, max, tag=:repetition)","",2],["new","Parslet::Atoms::Sequence","classes/Parslet/Atoms/Sequence.html#M000063","(*parslets)","",2],["new","Parslet::Atoms::Str","classes/Parslet/Atoms/Str.html#M000067","(str)","",2],["new","Parslet::Expression","classes/Parslet/Expression.html#M000110","(str, opts={}, context=self)","Creates a parslet from a foreign language expression.  Example:  Parslet::Expression.new(\"'a' 'b'\") ",2],["new","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000091","(context)","",2],["new","Parslet::Pattern","classes/Parslet/Pattern.html#M000118","(pattern)","",2],["new","Parslet::Slice","classes/Parslet/Slice.html#M000124","(string, offset, source=nil)","",2],["new","Parslet::Source","classes/Parslet/Source.html#M000140","(io)","",2],["nodes","Parslet::ErrorTree","classes/Parslet/ErrorTree.html#M000094","()","",2],["parse","Parslet::Atoms::Base","classes/Parslet/Atoms/Base.html#M000005","(io)","Given a string or an IO object, this will attempt a parse of its contents and return a result. If the",2],["parse","Parslet::Expression","classes/Parslet/Expression.html#M000112","(str)","Parses the string and returns a parse tree. ",2],["parse_with_debug","Parslet::Atoms::Base","classes/Parslet/Atoms/Base.html#M000089","(str)","Packages the common idiom begin tree = parser.parse('something') rescue Parslet::ParseFailed => error",2],["parslet","Parslet::Atoms::Entity","classes/Parslet/Atoms/Entity.html#M000042","()","",2],["pos","Parslet::Source","classes/Parslet/Source.html#M000143","()","",2],["pos=","Parslet::Source","classes/Parslet/Source.html#M000144","(new_pos)","",2],["present?","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000031","()","Tests for presence of a parslet atom in the input stream without consuming it.  Example:  # Only proceed",2],["prsnt?","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000032","()","Alias for #present?",2],["read","Parslet::Source","classes/Parslet/Source.html#M000141","(n)","Reads n chars from the input and returns a Range instance.  ",2],["repeat","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000021","(min=0, max=nil)","Construct a new atom that repeats the current atom min times at least and at most max times. max can",2],["root","Parslet::Parser","classes/Parslet/Parser.html#M000114","(name)","Define the parsers #root function. This is the place where you start  parsing; if you have a rule for",2],["rule","Parslet::ClassMethods","classes/Parslet/ClassMethods.html#M000155","(name, &definition)","Define an entity for the parser. This generates a method of the same name that can be used as part of",2],["rule","Parslet::Transform","classes/Parslet/Transform.html#M000147","(expression, &block)","Define a rule for the transform subclass.  ",2],["rule","Parslet::Transform","classes/Parslet/Transform.html#M000151","(expression, &block)","Defines a rule to be applied whenever apply is called on a tree. A rule is composed of two parts:  *",2],["sequence","Parslet","classes/Parslet.html#M000163","(symbol)","Returns a placeholder for a tree transformation that will only match a  sequence of elements. The +symbol+",2],["simple","Parslet","classes/Parslet.html#M000164","(symbol)","Returns a placeholder for a tree transformation that will only match  simple elements. This matches everything",2],["size","Parslet::Slice","classes/Parslet/Slice.html#M000129","()","Returns the slices size in characters. ",2],["str","Parslet","classes/Parslet.html#M000160","(str)","Returns an atom matching the +str+ given.  Example:  str('class')      # will match 'class'  ",2],["subtree","Parslet","classes/Parslet.html#M000165","(symbol)","Returns a placeholder for tree transformation patterns that will match  any kind of subtree.  Example:",2],["to_citrus","Parslet::Parser","classes/Parslet/Parser.html#M000108","()","Exports the current parser instance as a string in the Citrus dialect.  Example:  require 'parslet/export'",2],["to_f","Parslet::Slice","classes/Parslet/Slice.html#M000138","()","",2],["to_i","Parslet::Slice","classes/Parslet/Slice.html#M000137","()","",2],["to_int","Parslet::Slice","classes/Parslet/Slice.html#M000136","()","",2],["to_parslet","Parslet::Expression","classes/Parslet/Expression.html#M000113","()","Turns this expression into a parslet. ",2],["to_s","Parslet::Atoms::Base::Cause","classes/Parslet/Atoms/Base/Cause.html#M000036","()","",2],["to_s","Parslet::ErrorTree","classes/Parslet/ErrorTree.html#M000105","()","Alias for #ascii_tree",2],["to_s","Parslet::Slice","classes/Parslet/Slice.html#M000133","()","Alias for #to_str",2],["to_slice","Parslet::Slice","classes/Parslet/Slice.html#M000134","()","",2],["to_str","Parslet::Slice","classes/Parslet/Slice.html#M000132","()","Conversion operators ----------------------------------------------------- ",2],["to_sym","Parslet::Slice","classes/Parslet/Slice.html#M000135","()","",2],["to_treetop","Parslet::Parser","classes/Parslet/Parser.html#M000109","()","Exports the current parser instance as a string in the Treetop dialect.  Example:  require 'parslet/export'",2],["transform","Parslet::Expression","classes/Parslet/Expression.html#M000111","(tree)","Transforms the parse tree into a parslet expression.  ",2],["try","Parslet::Atoms::Base","classes/Parslet/Atoms/Base.html#M000009","(source, context)","Override this in your Atoms::Base subclasses to implement parsing behaviour.  ",2],["visit_alternative","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000078","(parslets)","",2],["visit_alternative","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000101","(alternatives)","",2],["visit_alternative","Parslet::Parser::Visitors::Treetop","classes/Parslet/Parser/Visitors/Treetop.html#M000104","(alternatives)","",2],["visit_entity","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000080","(name, block)","",2],["visit_entity","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000097","(name, block)","",2],["visit_lookahead","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000079","(positive, parslet)","",2],["visit_lookahead","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000102","(positive, bound_parslet)","",2],["visit_named","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000087","(name, parslet)","",2],["visit_named","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000098","(name, parslet)","",2],["visit_re","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000077","(match)","",2],["visit_re","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000093","(match)","",2],["visit_repetition","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000088","(min, max, parslet)","",2],["visit_repetition","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000100","(min, max, parslet)","",2],["visit_repetition","Parslet::Parser::Visitors::Treetop","classes/Parslet/Parser/Visitors/Treetop.html#M000103","(min, max, parslet)","",2],["visit_sequence","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000076","(parslets)","",2],["visit_sequence","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000099","(parslets)","",2],["visit_str","Parslet::Atoms::Transform","classes/Parslet/Atoms/Transform.html#M000072","(str)","",2],["visit_str","Parslet::Parser::Visitors::Citrus","classes/Parslet/Parser/Visitors/Citrus.html#M000092","(str)","",2],["|","Parslet::Atoms::DSL","classes/Parslet/Atoms/DSL.html#M000024","(parslet)","Chains two parslet atoms together to express alternation. A match will always be attempted with the parslet",2],["README","files/README.html","files/README.html","","INTRODUCTION  Parslet makes developing complex parsers easy. It does so by  * providing the best <b>error",3],["parslet.rb","files/lib/parslet_rb.html","files/lib/parslet_rb.html","","A simple parser generator library. Typical usage would look like this:  require 'parslet' class MyParser",3],["atoms.rb","files/lib/parslet/atoms_rb.html","files/lib/parslet/atoms_rb.html","","This is where parslets name comes from: Small parser atoms. ",3],["alternative.rb","files/lib/parslet/atoms/alternative_rb.html","files/lib/parslet/atoms/alternative_rb.html","","Alternative during matching. Contains a list of parslets that is tried each one in turn. Only fails if",3],["base.rb","files/lib/parslet/atoms/base_rb.html","files/lib/parslet/atoms/base_rb.html","","Base class for all parslets, handles orchestration of calls and implements a lot of the operator and",3],["context.rb","files/lib/parslet/atoms/context_rb.html","files/lib/parslet/atoms/context_rb.html","","",3],["dsl.rb","files/lib/parslet/atoms/dsl_rb.html","files/lib/parslet/atoms/dsl_rb.html","","A mixin module that defines operations that can be called on any subclass of Parslet::Atoms::Base. These",3],["entity.rb","files/lib/parslet/atoms/entity_rb.html","files/lib/parslet/atoms/entity_rb.html","","This wraps pieces of parslet definition and gives them a name. The wrapped piece is lazily evaluated",3],["lookahead.rb","files/lib/parslet/atoms/lookahead_rb.html","files/lib/parslet/atoms/lookahead_rb.html","","Either positive or negative lookahead, doesn't consume its input.  Example:  str('foo').present? # matches",3],["named.rb","files/lib/parslet/atoms/named_rb.html","files/lib/parslet/atoms/named_rb.html","","Names a match to influence tree construction.  Example:  str('foo')            # will return 'foo', ",3],["re.rb","files/lib/parslet/atoms/re_rb.html","files/lib/parslet/atoms/re_rb.html","","Matches a special kind of regular expression that only ever matches one character at a time. Useful members",3],["repetition.rb","files/lib/parslet/atoms/repetition_rb.html","files/lib/parslet/atoms/repetition_rb.html","","Matches a parslet repeatedly.  Example:  str('a').repeat(1,3)  # matches 'a' at least once, but at most",3],["sequence.rb","files/lib/parslet/atoms/sequence_rb.html","files/lib/parslet/atoms/sequence_rb.html","","A sequence of parslets, matched from left to right. Denoted by '>>' Example:  str('a') >> str('b')  #",3],["str.rb","files/lib/parslet/atoms/str_rb.html","files/lib/parslet/atoms/str_rb.html","","Matches a string of characters.  Example:  str('foo') # matches 'foo' ",3],["transform.rb","files/lib/parslet/atoms/transform_rb.html","files/lib/parslet/atoms/transform_rb.html","","",3],["visitor.rb","files/lib/parslet/atoms/visitor_rb.html","files/lib/parslet/atoms/visitor_rb.html","","Augments all parslet atoms with an accept method that will call back  to the visitor given. ",3],["convenience.rb","files/lib/parslet/convenience_rb.html","files/lib/parslet/convenience_rb.html","","",3],["error_tree.rb","files/lib/parslet/error_tree_rb.html","files/lib/parslet/error_tree_rb.html","","A tree structure that contains parse error messages. This can be used to give the user a detailed report",3],["export.rb","files/lib/parslet/export_rb.html","files/lib/parslet/export_rb.html","","Allows exporting parslet grammars to other lingos.  ",3],["expression.rb","files/lib/parslet/expression_rb.html","files/lib/parslet/expression_rb.html","","Allows specifying rules as strings using the exact same grammar that treetop does, minus the actions.",3],["treetop.rb","files/lib/parslet/expression/treetop_rb.html","files/lib/parslet/expression/treetop_rb.html","","",3],["parser.rb","files/lib/parslet/parser_rb.html","files/lib/parslet/parser_rb.html","","The base class for all your parsers. Use as follows:  require 'parslet' class MyParser < Parslet::Parser",3],["pattern.rb","files/lib/parslet/pattern_rb.html","files/lib/parslet/pattern_rb.html","","Matches trees against expressions. Trees are formed by arrays and hashes for expressing membership and",3],["binding.rb","files/lib/parslet/pattern/binding_rb.html","files/lib/parslet/pattern/binding_rb.html","","Used internally for representing a bind placeholder in a Parslet::Transform pattern. This is the superclass",3],["context.rb","files/lib/parslet/pattern/context_rb.html","files/lib/parslet/pattern/context_rb.html","","",3],["rspec.rb","files/lib/parslet/rig/rspec_rb.html","files/lib/parslet/rig/rspec_rb.html","","",3],["slice.rb","files/lib/parslet/slice_rb.html","files/lib/parslet/slice_rb.html","","A slice is a small part from the parse input. A slice mainly behaves like any other string, except that",3],["source.rb","files/lib/parslet/source_rb.html","files/lib/parslet/source_rb.html","","",3],["line_cache.rb","files/lib/parslet/source/line_cache_rb.html","files/lib/parslet/source/line_cache_rb.html","","",3],["transform.rb","files/lib/parslet/transform_rb.html","files/lib/parslet/transform_rb.html","","",3]]}}