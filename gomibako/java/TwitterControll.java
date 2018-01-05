package application;

import java.awt.Desktop;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Scanner;

import twitter4j.Status;
import twitter4j.StatusUpdate;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.auth.AccessToken;
import twitter4j.auth.RequestToken;


public class TwitterControll {
	RequestToken requestToken = null;
	AccessToken accessToken = null;
	final Scanner sc = new Scanner(System.in);
	final String file = "AccessToken.txt";
	final String path = System.getProperty("user.home") + "/.twitter/";
	final WriteFile writeFile = new WriteFile(file, path);
	Twitter twitter = TwitterFactory.getSingleton();
	Desktop desktop = Desktop.getDesktop();
	Status status = null;


	public TwitterControll(String key, String secretKey) throws TwitterException, URISyntaxException, IOException, ClassNotFoundException {
		File file = new File(path);
		twitter.setOAuthConsumer(key, secretKey);
	}

	public boolean setAPI() throws FileNotFoundException, ClassNotFoundException, IOException{
		if(writeFile.exit()) {
			System.out.println(accessToken = (AccessToken)writeFile.readObject());
			twitter.setOAuthAccessToken(accessToken);
			return true;
		}else {
			return false;
		}
	}
	public String getAccessTokenURL() throws TwitterException, IOException, URISyntaxException {
		requestToken = twitter.getOAuthRequestToken();
		//desktop.browse(new URI(requestToken.getAuthorizationURL()));
		return requestToken.getAuthorizationURL().toString();

	}
	public void setAccessToken(String pin) throws TwitterException, IOException {
		accessToken = twitter.getOAuthAccessToken(requestToken, pin);
		writeFile.saveObject(accessToken);
	}
	public void tweet(String value) throws TwitterException {
		System.out.println(twitter.getScreenName());
		status = twitter.updateStatus(value);
	}
	public void tweetImage(String text,File file) throws TwitterException {
		status = twitter.updateStatus(new StatusUpdate(text).media(file));
	}


}
