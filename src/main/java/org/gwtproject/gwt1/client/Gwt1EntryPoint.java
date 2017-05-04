package org.gwtproject.gwt1.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Gwt1EntryPoint implements EntryPoint {
    /**
     * The message displayed to the user when the server cannot be reached or
     * returns an error.
     */
    private static final String SERVER_ERROR = "An error occurred while "
            + "attempting to contact the server. Please check your network "
            + "connection and try again.";

    /**
     * Create a remote service proxy to talk to the server-side Greeting service.
     */
    private final Gwt1ServiceAsync greetingService = GWT.create(Gwt1Service.class);

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        final RootPanel rootPanel = RootPanel.get("mainPanel");
        Label label = new Label("Welcome to the GWT application");
        rootPanel.add(label);

        final Button sendButton = new Button("Send");
        sendButton.addClickHandler(clickEvent -> greetingService.greetServer("Joe", new AsyncCallback<String>() {
            @Override
            public void onFailure(Throwable throwable) {

            }

            @Override
            public void onSuccess(String s) {
                Label response = new Label(s);
                rootPanel.add(response);
            }
        }));
        rootPanel.add(sendButton);
    }

}
