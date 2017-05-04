package org.gwtproject.gwt1.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>Gwt1Service</code>.
 */
public interface Gwt1ServiceAsync {
    void greetServer(String input, AsyncCallback<String> callback)
            throws IllegalArgumentException;
}
