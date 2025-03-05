import java.util.Arrays;
import java.util.Scanner;

public class Anagram {

    public static boolean areAnagrams(String str1, String str2) {
        //convert to lowercase
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        if (str1.length() != str2.length()) {
            return false;
        }

        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input two strings
        System.out.print("Enter the first string: ");
        String string1 = scanner.nextLine();

        System.out.print("Enter the second string: ");
        String string2 = scanner.nextLine();

        // Check anagrams
        if (areAnagrams(string1, string2)) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }

        scanner.close();
    }
}
