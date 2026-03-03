import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  // Data Types
  type EnrollmentRequest = {
    name : Text;
    email : Text;
    phone : Text;
    courseInterest : Text;
    message : ?Text;
    timestamp : Time.Time;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Storage
  var nextEnrollmentId = 0;
  var nextMessageId = 0;

  let enrollmentRequests = Map.empty<Nat, EnrollmentRequest>();
  let contactMessages = Map.empty<Nat, ContactMessage>();

  // Public Functions
  public shared ({ caller }) func submitEnrollmentRequest(name : Text, email : Text, phone : Text, courseInterest : Text, message : ?Text) : async () {
    let request : EnrollmentRequest = {
      name;
      email;
      phone;
      courseInterest;
      message;
      timestamp = Time.now();
    };
    enrollmentRequests.add(nextEnrollmentId, request);
    nextEnrollmentId += 1;
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let contact : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactMessages.add(nextMessageId, contact);
    nextMessageId += 1;
  };

  public query ({ caller }) func getAllEnrollmentRequests() : async [EnrollmentRequest] {
    enrollmentRequests.values().toArray();
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray();
  };
};
