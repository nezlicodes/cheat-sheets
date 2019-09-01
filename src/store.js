import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state:{
        mainTitle: 'PHP Cheat-sheet',
        sections:[
            {
                sectionTitle:'Data Type',
                sectionContent:[
                    {
                        action:'string',
                        way: "'Hello PHP'"
                    },
                    {
                        action:'float',
                        way: '12.45'
                    },
                    {

                        action:'integer',
                        way: '12'
                    },

                  {  action:'bool',
                    way: 'true'},
                    {

                        action:'array',
                        way: "[0,1,2,'Hey']"
                    },
                    {

                        action:'null',
                        way: 'null'
                    },
                    {

                        action:'object',
                        way: 'new Object'
                    }
                ]
            },
            {
            
                sectionTitle:'Variables',
                sectionContent:[
                    {action:'Declare a varible',
                    way:'$var = value;'
                    },
                    {action:'Use a variable',
                    way:'echo "Hello ${var}";'
                    },
                    {action:'Assign a variable ',
                    ways:[{
                        action:'By value',
                        way:'$var2 = $var1'
                    },
                    {
                        action:'By reference',
                        way:'$var2 =& $var1'
                    }
                ]
                    
                    },
                ]
            },
            {
                sectionTitle:'Arrays',
                sectionContent:[
                    {
                        action: 'Defining Arrays',
                        ways:[
                           { action:'with the array function',
                            way: ' $arr = array("value1", "value2", 3, NULL)'},
                            {
                                action: 'with the shorthand',
                                method: " $arr = ['value1', 'value2', 3, NULL]"
                            }
                        ]
                    },
                    {
                        action: 'Use a variable',
                        way: "echo 'Hello ${var}'"
                    },
                    {
                        action: 'Access an element',
                        way: ' $arr[index]'
                    },
                    {
                        action:'Some array methods',
                        ways:[
                            {
                                action:'Add an item at the end of the array',
                                way: 'array_push($array, item)'
                            },
                            {
                                action:'Remove the last item of the array',
                                way: 'array_pop($array)'
                            },
                            {
                                action:'Remove the first item from the Array and return it',
                                way: ' array_shift($array) '
                            },
                            {
                                action:'Other methods',
                                way: 'count($array), array_unshift() '
                            },

                        ]
                    }
                    
                ]
            },
            {
                sectionTitle:'Functions',
                sectionContent:[
                    {
                        action: 'Defining Functions',
                        way:"function functionName()}{ #Do something;  }"
                    },
                    {
                        action: 'Invoking Functions',
                        way:"functionName();"
                    },
                    {
                        action: 'Defining parameters',
                        ways:[
                            {
                                action:' Define a parameter by value',
                                way: 'function functionName($param)}{#Do something;  }'
                            },
                            {
                                action:' Define a parameter by reference',
                                way: 'function functionName(&$param)}{#Do something;  }'
                            }

                        ]
                    }
                ]
            },
            {
                sectionTitle:'Conditionals',
                sectionContent:[
                    {
                        action:'if statements',
                        way:'if(condition) { do this}'
                    },
                    {
                        action:'if/else',
                        way:'if(condition) { do this} else if( another_condition) {do that)'
                    },

                ]
            },
            {
                sectionTitle:'Loops',
                sectionContent:[
                    {
                        action:'For loops',
                        way:'for ($i = 0; $i<3; $i++){ echo $i;}'
                    },
                    {
                        action:'While loops',
                        way: 'while(true) {echo true}'
                    }
                ]
            }
            
            
        ]    
    },
    getters:{
        getMainTitle(state){
            return state.mainTitle;
        }
        ,
        getSections(state){
            return state.sections;
        }
    }
})