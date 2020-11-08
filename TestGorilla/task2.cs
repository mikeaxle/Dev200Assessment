using System;

namespace question2
{
    class Program
    {
        static void Main(string[] args)
        {
            string dummyData = "1.2.3.04";
            int result = ValidateIPAddress(dummyData);

            Console.WriteLine(result);
        }

        public static int ValidateIPAddress(string IP)
        {
            var result = 0;
            var splitIP = IP.Split('.');
            if (splitIP.Length != 4)
            {
                result = 0;
            }
            else
            {
                if (splitIP[0] == null || splitIP[1] == null || splitIP[2] == null || splitIP[3] == null || splitIP[0] == string.Empty || splitIP[1] == string.Empty || splitIP[2] == string.Empty || splitIP[3] == string.Empty)
                {
                    result = 0;
                }
                else
                {
             
                    for (var i = 0; i < splitIP.Length; i++)
                    {
                        var numbers = splitIP[i];
                        Console.WriteLine(numbers);
                        if (numbers.StartsWith("0"))
                        {
                   
                            result = 0;
                        }
                        else
                        {
                            for (var j = 0; j < numbers.Length; j++)
                            {
                                if (numbers[j] >= 0 && numbers[j] <= 9)
                                {
                                    result = 0;
                                    break;
                                }
                            }

                            var number = int.Parse(numbers);
                            if (!(number <= 255))
                            {
                                result = 0;
                                break;
                            }
                            else
                            {
                                result = 1;
                                continue;
                            }
                        }
                    }
                }
            }

            return result;
        }

    }
}
