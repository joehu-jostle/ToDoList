package org.gwtproject.gwt2.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Created by Joe on 5/3/2017.
 */
public class Gwt2EntryPoint implements EntryPoint {
    private final Gwt2ServiceAsync someService = GWT.create(Gwt2Service.class);

    @Override
    public void onModuleLoad() {
        final RootPanel rootPanel = RootPanel.get("mainPanel");
        Label label = new Label("Second GWT module");
        rootPanel.add(label);

        final Button sendButton = new Button("Send");
        sendButton.addClickHandler(clickEvent -> someService.doSomething("Joe", new AsyncCallback<String>() {
            @Override
            public void onFailure(Throwable throwable) {

            }

            @Override
            public void onSuccess(String s) {
                HTML response = new HTML(s);
                rootPanel.add(response);
            }
        }));
        rootPanel.add(sendButton);
    }
}
